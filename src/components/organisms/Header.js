import React from "react";
import MainMenu from "../molecules/MainMenu";
import SearchBar from "../molecules/SearchBar";

const posts = [
	{ id: 1, title: "Post 1", content: "Content 1", date: "2022-05-01" },
	{ id: 2, title: "Post 2", content: "Content 2", date: "2022-05-02" },
];

const Header = () => {
	return (
		<header>
			<MainMenu />
			<SearchBar posts={posts} onSelect={() => {}} />
		</header>
	);
};

export default Header;
