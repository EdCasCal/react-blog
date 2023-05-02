import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const SearchBar = ({ posts, onSelect }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleSelect = (post) => {
		onSelect(post);
		setSearchTerm("");
	};

	const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()));

	return (
		<div className={"searchContainer"}>
			<div className={"searchInput"}>
				<label htmlFor="search-input" style={{}}>Search the site</label>
				<Input id="search-input" type="text" value={searchTerm} placeholder="Enter keyword" onChange={handleSearch} />
				<ul style={{ display: "none" }}>
					{filteredPosts.map((post) => (
						<li key={post.id} onClick={() => handleSelect(post)}>
							{post.title}
						</li>
					))}
				</ul>
			</div>

			<Button text={"Search"} onClick={handleSearch} />
		</div>
	);
};

export default SearchBar;
