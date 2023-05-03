import React, { useEffect, useState } from "react";
import localStoragePostsApi from "../../services/api";

import styles from "./BlogPage.module.css";
import Button from "../../components/atoms/Button";
import PostsList from "../../components/organisms/PostsList";

const BlogPage = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const storagePosts = localStoragePostsApi.getPosts();
		setPosts(storagePosts);
	}, []);

	return (
		<section className={styles.blogContainer}>
			<div className={styles.blogHeader}>
				<h1>Blog Posts</h1>
				<Button className={styles.addPostButton} text="Add Post" onClick={() => {}} />
			</div>
			<PostsList posts={posts} />
		</section>
	);
};

export default BlogPage;
