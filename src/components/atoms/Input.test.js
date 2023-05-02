import React from "react";
import { render, screen } from "@testing-library/react";
import Input from "./Input";

test("renders input with placeholder", () => {
	render(<Input type="text" placeholder="Enter text" />);

	const input = screen.getByPlaceholderText("Enter text");

	expect(input).toBeInTheDocument();
});
