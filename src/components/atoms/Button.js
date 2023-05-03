import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, onClick, className, disabled }) => {
	return (
		<button className={`${styles.buttonBaseStyle} ${className ?? ""}`} disabled={disabled ?? false} onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;
