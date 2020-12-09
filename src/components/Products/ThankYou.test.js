import React from "react";
import ThankYou from "./ThankYou.jsx";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';




describe("ThankYou test", () => {
	it("renders correctly", () => {
		const { container } = render(<BrowserRouter><ThankYou /></BrowserRouter>);
		expect(container).toMatchSnapshot();
	});
});