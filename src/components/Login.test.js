import React from "react";
import Login from "./Login.jsx";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';



describe("Login test", () => {
	it("renders correctly", () => {
		const { container } = render(<BrowserRouter><Login /></BrowserRouter>);
		expect(container).toMatchSnapshot();
	});
});