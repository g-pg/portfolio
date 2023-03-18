import classNames from "classnames";
import React from "react";
import styles from "./PrimaryBtn.module.css";
export default function PrimaryBtn({ children, type, style, color }) {
	return (
		<button
			type={type}
			className={classNames(styles.primaryBtn, color === "accent" && styles.accent)}
			style={style}
		>
			{children}
		</button>
	);
}
