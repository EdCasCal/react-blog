import React from "react";
import styles from "./ContactPage.module.css";
import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/Button";
import TextArea from "../../components/atoms/TextArea";

function ContactPage() {
	return (
		<section className={styles.contactContainer}>
			<h1>Contact Us</h1>
			<p className={styles.contactSubheader}>Feel free to reach out to us with any questions or feedback!</p>

			<form className={styles.formContent}>
				<label className={styles.formLabel}>
					Name
					<Input type="text" name="name" placeholder={"John Doe"} className={styles.formInput} />
				</label>
				<label className={styles.formLabel}>
					Email
					<Input type="email" name="email" placeholder={"lorem@ipsum.com"} className={styles.formInput} />
				</label>
				<label className={styles.formLabel}>
					Message
					<TextArea name="message" placeholder={"message text"} className={styles.formInput} />
				</label>

				<Button type="submit" text={"Submit"} className={styles.formSubmit}></Button>
			</form>
		</section>
	);
}

export default ContactPage;
