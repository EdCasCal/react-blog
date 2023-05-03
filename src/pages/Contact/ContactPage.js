import React from "react";

import styles from "./ContactPage.module.css";

import ContactForm from "../../components/organisms/ContactForm";

function ContactPage() {
	return (
		<section className={styles.contactContainer}>
			<h1>Contact Us</h1>
			<p className={styles.contactDescription}>Feel free to reach out to us with any questions or feedback!</p>

			<ContactForm />
		</section>
	);
}

export default ContactPage;
