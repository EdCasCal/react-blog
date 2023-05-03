import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import localStoragePostApi from "../../services/api";

import styles from "./PostViewPage.module.css";
import Button from "../../components/atoms/Button";

const PostViewPage = () => {
	const { postId } = useParams();
	const navigate = useNavigate();

	const [post, setPost] = useState(null);

	useEffect(() => {
		const storagePost = localStoragePostApi.getPost(postId);
		setPost(storagePost);
	}, [postId]);

	const handleEdit = () => {
		navigate(`/post/${postId}`);
	};

	const handleDelete = () => {
		localStoragePostApi.deletePost(postId);
		setPost(null);
		navigate("/blog");
	};

	if (!post) {
		return (
			<section className={styles.postContainer404}>
				<h1>404</h1>
			</section>
		);
	}

	return (
		<section className={styles.postViewContainer}>
			<div className={styles.postHeader}>
				<h1>{post.title}</h1>
				<div className={styles.postActions}>
					<Button className={styles.postActionButton} text="Edit" onClick={handleEdit} />
					<Button className={styles.postActionButton} text="Delete" onClick={handleDelete} />
				</div>
			</div>
			<div className={styles.postContent}>
				<p>{post.content}</p>
			</div>
			<div className={styles.postFooter}>
				<p>{post.author}</p>
				<p>{post.date}</p>
			</div>
		</section>
	);
};

export default PostViewPage;
