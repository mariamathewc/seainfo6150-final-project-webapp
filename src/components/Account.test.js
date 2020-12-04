import React from "react";
import Account from "./Account.jsx";
import { render } from "@testing-library/react";
import routeData from 'react-router';

const mockLocation = {
	pathname: '/account',
	state: {
		firstname: "Maria",
		lastname: "Mathew",
		address: "1700 N 1st St",
		city: "San Jose",
		state: "California",
		zipcode: "95112",
		country: "USA",
		email: "mariamathewc@gmail.com",
		phone: "5103092054",
		genders: "Female",

		birthday: "06",
		birthmonth: "01",
		birthyear: "1992"

	}
}


describe("Account tests", () => {
	it("renders correctly", () => {
		const { container } = jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation);
		expect(container).toMatchSnapshot();
	});
});

