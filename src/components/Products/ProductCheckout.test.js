import React from "react";

import { render } from "@testing-library/react";
import routeData from 'react-router';

const mockLocation = {
	pathname: 'localhost:3000/checkout',

}


describe("Product Checkout test", () => {
	it("renders correctly", () => {
		const { container } = jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation);
		expect(container).toMatchSnapshot();
	});
});

