import React from "react";
import NoMatch from "./NoMatch.jsx";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';



describe("NoMatch test", () => {
	it("renders correctly", () => {
		const { container } = render(<BrowserRouter><NoMatch /></BrowserRouter>);
		expect(container).toMatchSnapshot();
	});
});