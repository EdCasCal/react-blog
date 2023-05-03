import React from "react";
import styles from "./Input.module.css";

const Input = ({ type, placeholder, onChange, className, value, onBlur, onFocus }) => {
	return (
		<input
			value={value}
			className={`${className ?? ""} ${styles.inputBaseStyle} `}
			type={type}
			placeholder={placeholder}
			onChange={onChange}
			onBlur={onBlur}
			onFocus={onFocus}
		/>
	);
};

export default Input;
