import React from "react";
import Contacts from "./Contacts.jsx";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';



describe("Contacts test", () => {
	it("renders correctly", () => {
		const { container } = render(<BrowserRouter><Contacts /></BrowserRouter>);
		expect(container).toMatchSnapshot();
	});
});