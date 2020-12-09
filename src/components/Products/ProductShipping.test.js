import React from "react";
import ProductShipping from "./ProductShipping.jsx";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';




describe("ProductShipping test", () => {
	it("renders correctly", () => {
		const { container } = render(<BrowserRouter><ProductShipping  /></BrowserRouter>);
		expect(container).toMatchSnapshot();
	});
});