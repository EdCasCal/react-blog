import React from "react";
import styles from "./HomePage.module.css";
import Gallery from "../../components/molecules/ImageGallery";
import ImageHero from "../../components/molecules/ImageHero";

const HomePage = () => {
	return (
		<>
			<ImageHero />
			<div className={styles.homePageContiner}>
				<section className={styles.section}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra tempus lorem ut pretium. Quisque
						viverra nibh et nulla placerat, et accumsan mi venenatis. Fusce vitae risus feugiat, luctus justo nec,
						viverra dolor. Vivamus vehicula, purus eget consectetur sodales, metus tellus molestie ex, non ullamcorper
						purus erat a odio.
					</p>
					<iframe
						className={styles.homeVideoFrame}
						title="What is Lorem Ipsum?"
						src={"https://www.youtube.com/embed/CmzKQ3PSrow"}
					/>
				</section>
				<section className={styles.section}>
					<div className={styles.topComment}>
						<img
							className={styles.homeImage}
							src={"https://www.shutterstock.com/image-vector/lorem-ipsum-dolor-tag-cloud-260nw-1103263931.jpg"}
							alt="lorem ipsum words"
						/>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra tempus lorem ut pretium. Quisque
							viverra nibh et nulla placerat, et accumsan mi venenatis. Fusce vitae risus feugiat, luctus justo nec,
							viverra dolor.
						</p>
					</div>
					<Gallery />
				</section>
			</div>
		</>
	);
};

export default HomePage;
