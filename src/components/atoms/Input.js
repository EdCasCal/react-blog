import React from "react";
import styles from "./Input.module.css";

const Input = ({ type, placeholder, onChange, className }) => {
	return (
		<input
			className={`${className ?? ""} ${styles.inputBaseStyle} `}
			type={type}
			placeholder={placeholder}
			onChange={onChange}
		/>
	);
};

export default Input;
