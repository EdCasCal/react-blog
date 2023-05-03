import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TextArea from "./TextArea";

describe("TextArea", () => {
	test("should renders with placeholder text", () => {
		render(<TextArea placeholder="Enter text here" />);
		expect(screen.getByPlaceholderText("Enter text here")).toBeInTheDocument();
	});

	test("should call onChange when text is entered", () => {
		const onChange = jest.fn();
		render(<TextArea placeholder="Enter text here" onChange={onChange} />);
		fireEvent.change(screen.getByPlaceholderText("Enter text here"), { target: { value: "test" } });
		expect(onChange).toHaveBeenCalled();
	});

	test("should render with provided value", () => {
		render(<TextArea value="test value" readOnly={true} />);
		expect(screen.getByDisplayValue("test value")).toBeInTheDocument();
	});

	test("should render with provided rows", () => {
		render(<TextArea value="test value" rows={10} readOnly={true} />);
		expect(screen.getByDisplayValue("test value").getAttribute("rows")).toBe("10");
	});
});
