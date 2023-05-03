import React from "react";
import styles from "./PostsList.module.css";
import Post from "../molecules/Post";

const PostsList = ({ posts }) => {
	return (
		<div className={styles.postsListContainer}>
			{posts &&
				posts.map((post) => {
					return <Post key={post.id} post={post} />;
				})}
		</div>
	);
};

export default PostsList;
