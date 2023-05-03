import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./BlogPage.module.css";
import Button from "../../components/atoms/Button";
import PostsList from "../../components/organisms/PostsList";

import localStoragePostsApi from "../../services/api";

const BlogPage = () => {
	const [posts, setPosts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const storagePosts = localStoragePostsApi.getPosts();
		setPosts(storagePosts);
	}, []);

	const handleAddPost = () => {
		navigate("/post");
	};

	return (
		<section className={styles.blogContainer}>
			<div className={styles.blogHeader}>
				<h1>Blog Posts</h1>
				<Button className={styles.addPostButton} text="Add Post" onClick={handleAddPost} />
			</div>
			<PostsList posts={posts} />
		</section>
	);
};

export default BlogPage;
