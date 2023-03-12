import React from "react";
import styles from "./MainCard.module.css";
export default function MainCard({ svg, title, text }) {
	return (
		<div className={styles.cardWrapper}>
			<div className={styles.svg}>{svg}</div>
			<p className={styles.title}>{title}</p>
			<p className={styles.text}>{text}</p>
		</div>
	);
}
