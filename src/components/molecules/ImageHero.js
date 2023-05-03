import styles from "./ImageHero.module.css";

const ImageHero = () => {
	return (
		<section className={styles.heroContainer}>
			<img
				className={styles.heroImage}
				src={"https://compote.slate.com/images/5294e6d0-53ed-4a4a-a350-7eaeab72ac93.jpeg?crop=1560%2C1040%2Cx0%2Cy0"}
				alt={"lorem ipsum hero background"}
			/>
			<div className={styles.heroInformation}>
				<h1>Lorem Ipsum</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra tempus lorem ut pretium.</p>
			</div>
		</section>
	);
};
export default ImageHero;
