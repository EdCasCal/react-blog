import { getStoragePosts, setStoragePosts } from "./storage";

const POSTS_KEY = "BLOG_POSTS";

describe("getStoragePosts", () => {
	beforeEach(() => {
		localStorage.clear();
	});

	test("should return an empty array when there are no posts in local storage", () => {
		localStorage.clear();
		const posts = getStoragePosts();
		expect(posts).toEqual([]);
	});

	test("should return an array of posts when there are posts in local storage", () => {
		localStorage.clear();
		const mockPosts = [
			{
				id: 1,
				title: "First post",
				content: "Lorem ipsum dolor sit amet",
			},
			{
				id: 2,
				title: "Second post",
				content: "Lorem ipsum dolor sit amet",
			},
		];

		localStorage.setItem(POSTS_KEY, JSON.stringify(mockPosts));

		const posts = getStoragePosts();
		expect(posts).toEqual(mockPosts);
	});
});

describe("setStoragePosts", () => {
	beforeEach(() => {
		localStorage.clear();
	});

	test("should set the given posts array to local storage", () => {
		localStorage.clear();
		const mockPosts = [
			{
				id: 1,
				title: "First post",
				content: "Lorem ipsum dolor sit amet",
			},
			{
				id: 2,
				title: "Second post",
				content: "Lorem ipsum dolor sit amet",
			},
		];

		setStoragePosts(mockPosts);

		const postsJSON = localStorage.getItem(POSTS_KEY);
		const posts = JSON.parse(postsJSON);
		expect(posts).toEqual(mockPosts);
	});

	test("should return the given posts array", () => {
		localStorage.clear();
		const mockPosts = [
			{
				id: 1,
				title: "First post",
				content: "Lorem ipsum dolor sit amet",
			},
			{
				id: 2,
				title: "Second post",
				content: "Lorem ipsum dolor sit amet",
			},
		];

		const result = setStoragePosts(mockPosts);
		expect(result).toEqual(mockPosts);
	});
});
