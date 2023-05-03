import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./PostForm.module.css";

import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/Button";
import TextArea from "../../components/atoms/TextArea"

import localStoragePostApi from "../../services/api";

function PostForm({ post, isNewPost }) {
	const [form, setForm] = useState({ title: "", author: "", content: "", date: "", id: 0 });
	const navigate = useNavigate();

	useEffect(() => {
		setForm(post);
	}, [post]);

	const handleTitleChange = (event) => {
		setForm({ ...form, title: event.target.value });
	};

	const handleContentChange = (event) => {
		setForm({ ...form, content: event.target.value });
	};

	const handleAuthorChange = (event) => {
		setForm({ ...form, author: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!isValidForm()) {
			console.log("Invalid form.");
			return;
		}

        if(isNewPost) {
        localStoragePostApi.createPost(form);
        } else {
        localStoragePostApi.updatePost(post.id, form);
        }

		setForm({ name: "", email: "", message: "" });
		navigate(-1);
	};

	const handleCancel = (event) => {
		console.log("cancel");
		event.preventDefault();
		navigate(-1);
	};

	const isValidForm = () => {
		if (form.title === "" || form.content === "" || form.author === "") {
			return false;
		}

		return true;
	};

	return (
		<form className={styles.formContent} onSubmit={handleSubmit}>
			<label htmlFor="title" className={styles.formLabel}>
				Title
				<Input
					type="text"
					name="title"
					required
					placeholder={"post title"}
					className={styles.formInput}
					value={form.title}
					onChange={handleTitleChange}
				/>
			</label>
			<label htmlFor="content" className={styles.formLabel}>
				Content
				<TextArea
					type="text"
					name="content"
					rows="10"
					placeholder={"post content"}
					className={styles.formInput}
					value={form.content}
					onChange={handleContentChange}
				/>
			</label>
			<label htmlFor="author" className={styles.formLabel}>
				Author
				<Input
					name="author"
					placeholder={"post author"}
					className={styles.formInput}
					value={form.author}
					onChange={handleAuthorChange}
				/>
			</label>
			<div className={styles.formActions}>
				<Button type="submit" text={"Submit"} className={styles.formSubmit}></Button>
				<Button text={"Cancel"} className={styles.formCancel} onClick={handleCancel}></Button>
			</div>
		</form>
	);
}

export default PostForm;
