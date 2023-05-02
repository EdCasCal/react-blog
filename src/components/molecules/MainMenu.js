import React from "react";
import { Link } from "react-router-dom";
import BlogLogo from "../atoms/BlogLogo";
import styles from "./MainMenu.module.css";

const navigarionLinks = [
	{
		id: 1,
		text: "Home",
		path: "/",
	},
	{
		id: 2,
		text: "About",
		path: "/about",
	},
	{
		id: 3,
		text: "Blog",
		path: "/blog",
	},
	{
		id: 4,
		text: "Contact",
		path: "/contact",
	},
];

const MainMenu = () => {
	return (
		<nav>
			<BlogLogo />
			<ul className={styles.mainMenuContainer}>
				{navigarionLinks.map((link) => (
					<li key={link.id}>
						<Link className={styles.menuLink} to={link.path}>
							{link.text}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default MainMenu;
