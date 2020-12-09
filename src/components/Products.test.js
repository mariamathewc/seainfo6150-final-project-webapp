import React from "react";
import Products from "./Products.jsx";
import { render } from "@testing-library/react";
import routeData from 'react-router';
import { BrowserRouter } from 'react-router-dom';

describe("Product test", () => {
	it("renders correctly", () => {
		const { container } = jest.mock('react-router-dom', () => ({
			...jest.requireActual('react-router-dom'),
			useLocation: jest.fn()
			
		}));
		expect(container).toMatchSnapshot();
	})


});



