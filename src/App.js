import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { initializeLocalStorage } from "./services/storage";

import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import BlogPage from "./pages/Blog/BlogPage";
import ContactPage from "./pages/Contact/ContactPage";
import PostViewPage from "./pages/PostView/PostViewPage";
import PostEditPage from "./pages/PostEdit/PostEditPage";

function App() {
	useEffect(() => {
		initializeLocalStorage();
	}, []);

	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/about" element={<AboutPage />} />
			<Route exact path="/blog" element={<BlogPage />} />
			<Route path="/blog/:postId" element={<PostViewPage />} />
			<Route exact path="/post" element={<PostEditPage />} />
			<Route path="/post/:postId" element={<PostEditPage />} />
			<Route path="/contact" element={<ContactPage />} />
			<Route path="/post"></Route>
		</Routes>
	);
}

export default App;
