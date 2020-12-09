import React from "react";

import { render } from "@testing-library/react";
import routeData from 'react-router';

const mockLocation = {
	pathname: 'localhost:3000/collections',

}


describe("Product Collection test", () => {
	it("renders correctly", () => {
		const { container } = jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation);
		expect(container).toMatchSnapshot();
	});
});

