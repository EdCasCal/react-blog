import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Post.module.css";

const Post = ({ post }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/blog/${post.id}`);
	};

	return (
		<div key={post.id} className={styles.postContainer} onClick={handleClick}>
			<div>
				<h3 className={styles.postTitle}>{post.title}</h3>
				<p>{post.content}</p>
			</div>
			<div className={styles.postFooter}>
				<p>{post.author}</p>
				<p>{post.date}</p>
			</div>
		</div>
	);
};

export default Post;
