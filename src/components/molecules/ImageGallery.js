import styles from "./ImageGallery.module.css";

const Gallery = () => {
	return (
		<div className={styles.gallery}>
			<img
				className={styles.image}
				src={
					"https://media.istockphoto.com/id/185313478/photo/cmyk-color-guide-and-lorem-ipsum-text.jpg?s=612x612&w=0&k=20&c=llnNEei8KmQBbZkXJYEOl2wdHMs3d9vly7gp9oN4jJk="
				}
				alt="lorem ipsum gallery 1"
			/>
			<img
				className={styles.image}
				src={"https://gyazo.com/047342d8585ab00648c909af0f01b150/max_size/1000"}
				alt="lorem ipsum gallery 2"
			/>
			<img
				className={styles.image}
				src={"https://cdn-images-1.medium.com/max/690/0*zvpP3QHGQsNKJ3mx.jpg"}
				alt="lorem ipsum gallery 3"
			/>
			<img
				className={styles.image}
				src={"https://www.typingpal.com/images/1/3/a/8/4/13a845e178cb05ecc149ffc850ad9a6eac19f85d-lorem-ipsum.png"}
				alt="lorem ipsum gallery 4"
			/>
			<img
				className={styles.image}
				src={"https://www.creativefabrica.com/wp-content/uploads/2016/05/lorem1-o-Font-Subscription.jpg"}
				alt="lorem ipsum gallery 5"
			/>
			<img
				className={styles.image}
				src={"https://t3.ftcdn.net/jpg/02/08/90/26/360_F_208902651_lWwE8cwTlR81hHbO4LNIqc0lGxjKnJHO.jpg"}
				alt="lorem ipsum gallery 6"
			/>
			<img
				className={styles.image}
				src={
					"https://c8.alamy.com/comp/HTWCE7/lorem-ipsum-latin-phrase-made-from-metallic-letterpress-blocks-on-HTWCE7.jpg"
				}
				alt="lorem ipsum gallery 7"
			/>
			<img
				className={styles.image}
				src={"https://as1.ftcdn.net/v2/jpg/03/08/45/30/1000_F_308453025_9oezzk3K6V8nYadSS8xeYk28zMhDKhFJ.jpg"}
				alt="lorem ipsum gallery 8"
			/>
			<img
				className={styles.image}
				src={
					"https://cdn.dribbble.com/users/1387417/screenshots/4815558/media/7d6dfb359dfecd1e593d4c98ce1d7475.png?compress=1&resize=400x300&vertical=top"
				}
				alt="lorem ipsum gallery 9"
			/>
		</div>
	);
};
export default Gallery;
