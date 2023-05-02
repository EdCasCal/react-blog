import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import styles from "./SearchBar.module.css";

const search = {
	id: "search-input",
	placeholder: "Enter keyword",
	buttonText: "Search",
};

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
		<form className={styles.searchContainer}>
			<div className={styles.searchInput}>
				<label htmlFor={search.id} className={styles.searchLabel}>
					Search the site
				</label>
				<Input
					className={styles.searchInput}
					name={search.id}
					type="text"
					value={searchTerm}
					placeholder={search.placeholder}
					onChange={handleSearch}
				/>
			</div>

			<Button className={styles.searchButton} text={search.buttonText} onClick={handleSearch} />

			<ul className={styles.resultContainer}>
				{filteredPosts.map((post) => (
					<li key={post.id} onClick={() => handleSelect(post)}>
						{post.title}
					</li>
				))}
			</ul>
		</form>
	);
};

export default SearchBar;
