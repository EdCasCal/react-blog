import React from "react";
import { render, screen } from "@testing-library/react";
import BlogLogo from "./BlogLogo";

test("renders blog logo", () => {
	render(<BlogLogo />);

	const logo = screen.getByAltText("Blog Logo");

	expect(logo).toBeInTheDocument();
});
