import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/any-framework";
import Button from "./Button";

test("renders button with text", () => {
	const onClick = jest.fn();
	render(<Button text="Button test" onClick={onClick} />);
	const button = screen.getByText("Button test");

	expect(button).toBeInTheDocument();
});

test("should call button onclick event", () => {
	const onClick = jest.fn();
	render(<Button text="Button test" onClick={onClick} />);
	const button = screen.getByText("Button test");

	fireEvent.click(button);
	expect(onClick).toHaveBeenCalled();
});
