import { INITIAL_POSTS } from "../data/posts";

const POSTS_KEY = "BLOG_POSTS";

export const initializeLocalStorage = () => {
	const storedObject = JSON.parse(localStorage.getItem(POSTS_KEY));

	if (!storedObject) {
		localStorage.setItem(POSTS_KEY, JSON.stringify(INITIAL_POSTS));
	}
};

export const getStoragePosts = () => {
	const postsJSON = localStorage.getItem(POSTS_KEY);
	if (!postsJSON) {
		return [];
	}

	const posts = JSON.parse(postsJSON);
	return posts;
};

export const setStoragePosts = (posts) => {
	localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
	return posts;
};
