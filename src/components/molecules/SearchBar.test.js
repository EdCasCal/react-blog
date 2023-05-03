import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

const posts = [
	{ id: 1, title: "Post 1" },
	{ id: 2, title: "Post 2" },
];

test("renders search bar with posts", () => {
	const onSelect = jest.fn();
	render(<SearchBar posts={posts} onSelect={onSelect} />);

	const input = screen.getByPlaceholderText("Search");
	fireEvent.change(input, { target: { value: "post" } });
	const post1 = screen.getByText("Post 1");
	fireEvent.click(post1);

	expect(onSelect).toHaveBeenCalledWith(posts[0]);
});
