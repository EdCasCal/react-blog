import React from "react";
import { render, screen } from "@testing-library/react";
import AboutPage from "./AboutPage";

test("renders about page with text", () => {
	render(<AboutPage />);
	const heading = screen.getByText("About");
	const text = screen.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

	expect(heading).toBeInTheDocument();
	expect(text).toBeInTheDocument();
});
