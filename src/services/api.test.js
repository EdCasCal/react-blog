import localStoragePostApi from "./api";
import { getStoragePosts, setStoragePosts } from "./storage";
import { dateFormater } from "./utils";

jest.mock("./storage");

describe("localStoragePostApi", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test("should get a post successfully", () => {
		const posts = [{ id: 1, title: "First Post", content: "Lorem ipsum dolor sit amet" }];
		const postIndex = 0;
		getStoragePosts.mockReturnValue(posts);
		const post = localStoragePostApi.getPost(1);
		expect(post).toEqual(posts[postIndex]);
		expect(getStoragePosts).toHaveBeenCalledTimes(1);
	});

	test("should throw an error when getting a post with a non-existent ID", () => {
		const posts = [{ id: 1, title: "First Post", content: "Lorem ipsum dolor sit amet" }];
		getStoragePosts.mockReturnValue(posts);
		expect(() => {
			localStoragePostApi.getPost(2);
		}).toThrow("Failed to fetch post with ID: 2.");
		expect(getStoragePosts).toHaveBeenCalledTimes(1);
	});

	test("should get all posts successfully", () => {
		const posts = [
			{ id: 1, title: "First Post", content: "Lorem ipsum dolor sit amet" },
			{ id: 2, title: "Second Post", content: "Lorem ipsum dolor sit amet" },
		];
		getStoragePosts.mockReturnValue(posts);
		const response = localStoragePostApi.getPosts();
		expect(response).toEqual(posts);
		expect(getStoragePosts).toHaveBeenCalledTimes(1);
	});

	test("should throw an error when getting all posts with an empty response", () => {
		getStoragePosts.mockReturnValue(null);

		expect(() => {
			localStoragePostApi.getPosts();
		}).toThrow("Failed to fetch posts.");

		expect(getStoragePosts).toHaveBeenCalledTimes(1);
	});

	test("should create a post successfully", () => {
		const posts = [{ id: 1, title: "First Post", content: "Lorem ipsum dolor sit amet" }];
		const newPost = { title: "Second Post", content: "Lorem ipsum dolor sit amet", date: dateFormater(new Date())};
		const updatedPosts = [...posts, { id: 2, ...newPost }];

		getStoragePosts.mockReturnValue(posts);
		setStoragePosts.mockReturnValue(updatedPosts);
		const response = localStoragePostApi.createPost(newPost);

		expect(response).toEqual(true);

		expect(setStoragePosts).toHaveBeenCalledWith(updatedPosts);
	});

	test("should throw an error when creating a post fails", () => {
		const posts = [{ id: 1, title: "First Post", content: "Lorem ipsum dolor sit amet" }];
		const newPost = { title: "Second Post", content: "Lorem ipsum dolor sit amet" };
		getStoragePosts.mockReturnValue(posts);
		setStoragePosts.mockReturnValue(null);

		expect(() => {
			localStoragePostApi.createPost(newPost);
		}).toThrow("Failed to create post.");

		expect(setStoragePosts).toHaveBeenCalledWith([...posts, { id: 2, ...newPost }]);
	});
});
