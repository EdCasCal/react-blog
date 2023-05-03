import React from "react";
import styles from "./TextArea.module.css";

const TextArea = ({ placeholder, onChange, className, value, rows, readOnly }) => {
	return (
		<textarea
			rows={rows ?? 5}
			className={`${className ?? ""} ${styles.textAreaBaseStyle} `}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			readOnly={readOnly ?? false}
		/>
	);
};

export default TextArea;
