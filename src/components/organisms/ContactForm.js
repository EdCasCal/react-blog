import React from "react";
import { useState } from "react";

import styles from "./ContactForm.module.css";

import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/Button";
import TextArea from "../../components/atoms/TextArea";

function ContactForm() {
	const [form, setForm] = useState({ name: "", email: "", message: "" });

	const handleNameChange = (event) => {
		setForm({ ...form, name: event.target.value });
	};

	const handleEmailChange = (event) => {
		setForm({ ...form, email: event.target.value });
	};

	const handleMessageChange = (event) => {
		setForm({ ...form, message: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(form);

		setForm({ name: "", email: "", message: "" });
	};

	return (
		<form className={styles.formContent} onSubmit={handleSubmit}>
			<label htmlFor="name" className={styles.formLabel}>
				Name
				<Input
					type="text"
					name="name"
					placeholder={"John Doe"}
					className={styles.formInput}
					value={form.name}
					onChange={handleNameChange}
				/>
			</label>
			<label htmlFor="email" className={styles.formLabel}>
				Email
				<Input
					type="email"
					name="email"
					placeholder={"lorem@ipsum.com"}
					className={styles.formInput}
					value={form.email}
					onChange={handleEmailChange}
				/>
			</label>
			<label htmlFor="message" className={styles.formLabel}>
				Message
				<TextArea
					name="message"
					placeholder={"message text"}
					className={styles.formInput}
					value={form.message}
					onChange={handleMessageChange}
				/>
			</label>

			<Button type="submit" text={"Submit"} className={styles.formSubmit}></Button>
		</form>
	);
}

export default ContactForm;
