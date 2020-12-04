import React from "react";
import CampCollections from "./CampCollections.jsx";
import { render } from "@testing-library/react";
import routeData from 'react-router';

const mockLocation = {
	pathname: 'localhost:3000/campdetails',

}


describe("Camp Detail tests", () => {
	it("renders correctly", () => {
		const { container } = jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation);
		expect(container).toMatchSnapshot();
	});
});

