import React from "react";
import { useInView } from "react-intersection-observer";
export default function HomeSectionLayout({ children, sectionId }) {
	const { ref: sectionRef, inView } = useInView({ triggerOnce: true });

	return (
		<section
			className={classNames("home-section", inView ? "inView" : "notInView")}
			id={sectionId}
			ref={sectionRef}
		>
			<div className={classNames("container", styles.sectionWrapper)}>{children}</div>
		</section>
	);
}
