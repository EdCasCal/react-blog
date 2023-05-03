import { getStoragePosts, setStoragePosts } from "./storage";
import { dateFormater } from "./utils";

class LocalStorageApi {
	constructor(postsService) {
		this.postsService = postsService;
	}

	getPost(id) {
		const post = this.postsService.getPost(id);

		if (!post) {
			throw new Error(`Failed to fetch post with ID: ${id}.`);
		}

		return post;
	}

	getPosts() {
		const posts = this.postsService.getPosts();

		if (!posts) {
			throw new Error(`Failed to fetch posts.`);
		}

		return posts;
	}

	createPost(post) {
		const response = this.postsService.createPost(post);

		if (!response) {
			throw new Error(`Failed to create post.`);
		}

		return true;
	}

	updatePost(id, post) {
		const response = this.postsService.updatePost(id, post);

		if (!response) {
			throw new Error(`Failed to update post.`);
		}

		return true;
	}

	deletePost(id) {
		const response = this.postsService.deletePost(id);

		if (!response) {
			throw new Error(`Failed to delete post.`);
		}

		return true;
	}
}


const localStoragePostsApi = new LocalStorageApi({
	getPost: (id) => {
		const posts = getStoragePosts();
		const postIndex = posts.findIndex((post) => parseInt(post.id) === parseInt(id));

		return posts[postIndex];
	},

	getPosts: () => {
		return getStoragePosts();
	},

	createPost: (post) => {
		const posts = getStoragePosts();
		post.id = posts.length + 1;
		post.date = dateFormater(new Date());

		return setStoragePosts([...posts, post]);
	},

	updatePost: (id, post) => {
		post.date = dateFormater(new Date());
		let posts = getStoragePosts();
		const postIndex = posts.findIndex((post) => parseInt(post.id) === parseInt(id));

		const updatedPost = { ...posts[postIndex], ...post };
		return setStoragePosts([...posts.slice(0, postIndex), updatedPost, ...posts.slice(postIndex + 1)]);
	},

	deletePost: (id) => {
		let posts = getStoragePosts();
		const postIndex = posts.findIndex((post) => parseInt(post.id) === parseInt(id));

		return setStoragePosts([...posts.slice(0, postIndex), ...posts.slice(postIndex + 1)]);
	},
});

export default localStoragePostsApi;
