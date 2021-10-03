import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";
import { BrowserRouter as Router } from "react-router-dom";

// Testing button component
test("Should not allowed click button if isDisabled is present", () => {
	const { container } = render(<Button isDisabled></Button>);
	// Check span element if disabled
	expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

// Testing button component
test("Should render loading spinner", () => {
	const { container, getByText } = render(<Button isLoading></Button>);
	// Using regex to check loading text in the Button component
	expect(getByText(/loading/i)).toBeInTheDocument();
	// Check span element in the button
	expect(container.querySelector("span")).toBeInTheDocument();
});

// Testing button component
test("Should render <a> tag", () => {
	const { container } = render(<Button type="link" isExternal></Button>);
	// Check span element in the button
	expect(container.querySelector("a")).toBeInTheDocument();
});

// Testing button component
test("Should render <Link> component", () => {
	const { container } = render(
		<Router>
			<Button href="" type="link"></Button>
		</Router>
	);
	// Check span element in the button
	expect(container.querySelector("a")).toBeInTheDocument();
});
