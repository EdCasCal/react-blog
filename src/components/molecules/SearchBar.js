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
	const [searchResults, setSearchResults] = useState([]);

	const handleSearch = (event) => {
		const value = event.target.value;
		if (value === "") {
			setSearchTerm("");
			setSearchResults([]);
			return;
		}

		setSearchTerm(value);
		const results = posts.filter((post) => post.title.toLowerCase().includes(value.toLowerCase()));
		setSearchResults(results);
	};

	const handleButtonSearch = () => {
		if (searchTerm === "") {
			setSearchTerm("");
			setSearchResults([]);
			return;
		}

		const results = posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
		setSearchResults(results);
	};

	const handleBlur = () => {
		setTimeout(() => {
			setSearchResults([]);
		}, 200);
	};

	const handleSelect = (post) => {
		setSearchTerm("");
		setSearchResults([]);

		onSelect(post.id);
	};

	return (
		<div className={styles.searchContainer}>
			<div className={styles.searchForm}>
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
						onBlur={handleBlur}
						onFocus={handleSearch}
					/>
				</div>

				<Button className={styles.searchButton} text={search.buttonText} onClick={handleButtonSearch} />
			</div>
			{searchResults && (
				<ul className={styles.resultContainer}>
					{searchResults.map((post) => (
						<li key={post.id} className={styles.resultItem} onClick={() => handleSelect(post)}>
							{post.title}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default SearchBar;
