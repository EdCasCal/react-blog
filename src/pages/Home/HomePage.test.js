import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

const posts = [
	{ id: 1, title: "Post 1", content: "Content 1" },
	{ id: 2, title: "Post 2", content: "Content 2" },
];

test("renders home page with blog list and search bar", () => {
	const onSearch = jest.fn();
	const onSelect = jest.fn();
	render(<HomePage posts={posts} onSearch={onSearch} onSelect={onSelect} />);
	const heading = screen.getByText("Blog");
	const searchBar = screen.getByText("Search");
	const blogList = screen.getByText("Post 1");

	expect(heading).toBeInTheDocument();
	expect(searchBar).toBeInTheDocument();
	expect(blogList).toBeInTheDocument();
});
