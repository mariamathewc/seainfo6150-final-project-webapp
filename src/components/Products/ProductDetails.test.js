import React from "react";

import { render } from "@testing-library/react";
import routeData from 'react-router';

const mockLocation = {
	pathname: 'localhost:3000/details',

}


describe("Product Detail test", () => {
	it("renders correctly", () => {
		const { container } = jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation);
		expect(container).toMatchSnapshot();
	});
});

