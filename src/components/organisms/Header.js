import React, { useEffect, useState } from "react";
import localStoragePostsApi from "../../services/api";
import { useNavigate } from "react-router-dom";

import MainMenu from "../molecules/MainMenu";
import SearchBar from "../molecules/SearchBar";

const Header = () => {
	const [posts, setPosts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const storagePosts = localStoragePostsApi.getPosts();
		setPosts(storagePosts);
	}, []);

	const handleSelect = (postId) => {
		navigate(`/blog/${postId}`);
	};

	return (
		<header>
			<MainMenu />
			<SearchBar posts={posts} onSelect={handleSelect} />
		</header>
	);
};

export default Header;
