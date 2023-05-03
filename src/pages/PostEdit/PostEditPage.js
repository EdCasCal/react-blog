import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./PostEditPage.module.css";

import PostForm from "../../components/organisms/PostForm";
import localStoragePostApi from "../../services/api";

function PostEditPage() {
	const { postId } = useParams();
	const [isNewPost, setIsNewPost] = useState(false);
	const [post, setPost] = useState(null);

	useEffect(() => {
		if (!postId) {
			setIsNewPost(true);
			setPost({
				title: "",
				content: "",
				author: "",
			});
			return;
		}

		try {
			const storagePost = localStoragePostApi.getPost(postId);
			setPost(storagePost);
		} catch (e) {
			console.log(e.message);
			setPost(null);
		}
	}, [postId]);

	if (!post && !isNewPost) {
		return (
			<section className={styles.postEditContainer404}>
				<h1>404</h1>
			</section>
		);
	}

	return (
		<section className={styles.postEditContainer}>
			<h1>{postId ? "Edit Post" : "Create Post"}</h1>

			<PostForm post={post} isNewPost={isNewPost} />
		</section>
	);
}

export default PostEditPage;
