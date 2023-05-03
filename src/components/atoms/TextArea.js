import React from "react";
import styles from "./TextArea.module.css";

const TextArea = ({ placeholder, onChange, className, value }) => {
	return (
		<textarea
			rows={5}
			className={`${className ?? ""} ${styles.textAreaBaseStyle} `}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};

export default TextArea;
