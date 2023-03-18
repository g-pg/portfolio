import React from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import styles from "./HomeSectionLayout.module.css";
export default function HomeSectionLayout({
	children,
	sectionId,
	sectionClass,
	sectionWrapper,
	sectionTitle,
}) {
	const { ref: sectionRef, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

	return (
		<section
			className={classNames(styles.homeSection, sectionClass)}
			id={sectionId}
			ref={sectionRef}
		>
			<div
				className={classNames(
					"container",
					sectionWrapper,
					inView ? styles.inView : styles.notInView
				)}
			>
				{sectionTitle && <h3 className={styles.sectionTitle}>{sectionTitle}</h3>}
				{children}
			</div>
		</section>
	);
}

export function PrimaryText({ children, style }) {
	return (
		<p className={styles.primaryText} style={style}>
			{children}
		</p>
	);
}

export function HighLight({ children }) {
	return <span style={{ fontWeight: "700", color: "var(--cl-accent)" }}>{children}</span>;
}
