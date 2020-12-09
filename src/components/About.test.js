import React from "react";
import About from "./About.jsx";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';



describe("About test", () => {
	it("renders correctly", () => {
		const { container } = render(<BrowserRouter><About /></BrowserRouter>);
		expect(container).toMatchSnapshot();
	});
});