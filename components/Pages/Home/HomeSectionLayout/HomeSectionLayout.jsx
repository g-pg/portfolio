import React from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import styles from "./HomeSectionLayout.module.css";
export default function HomeSectionLayout({ children, sectionId, sectionWrapper, sectionTitle }) {
	const { ref: sectionRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<section
			className={classNames(styles.homeSection, inView ? styles.inView : styles.notInView)}
			id={sectionId}
			ref={sectionRef}
		>
			<div className={classNames("container", sectionWrapper)}>
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
