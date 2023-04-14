import classNames from "classnames";
import React from "react";
import styles from "./PrimaryBtn.module.css";
export default function PrimaryBtn({ children, onClick, href, type, style, color, title }) {
	return (
		<button
			onClick={onClick}
			type={type}
			className={classNames(styles.primaryBtn, color === "accent" && styles.accent)}
			style={style}
			href={href}
			title={title}
		>
			{children}
		</button>
	);
}
