import React from "react";
import { useInView } from "react-intersection-observer";

import HomeSectionLayout from "../HomeSectionLayout/HomeSectionLayout";
import classNames from "classnames";
import styles from "./AboutSection.module.css";
export default function AboutSection() {
	const { ref: sectionRef, inView } = useInView({ triggerOnce: true });
	return (
		<HomeSectionLayout
			sectionId="about"
			sectionWrapper={styles.sectionWrapper}
			sectionTitle={"Sobre mim"}
		>
			<p className={styles.primaryText}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem adipisci, quod
				blanditiis, quas doloremque pariatur natus porro sapiente illum quisquam alias
				sed. Placeat, soluta ullam! Inventore et similique laboriosam officia, vitae
				esse optio labore itaque perferendis deleniti, consequatur a nihil rerum,
				repudiandae ullam totam quaerat ipsum eveniet id? Magni in, dolore eum iure
				ipsum veritatis illum voluptatem unde neque natus, odit culpa. Veniam ut
				molestias incidunt, perferendis tempora laborum nulla ipsum debitis praesentium
				mollitia dolore laboriosam, officiis voluptates officia repellat et assumenda
				perspiciatis inventore non repudiandae? Amet, ab fugiat tempore quos, eius
				repellat ullam vitae, dolorum fuga earum aperiam dolores.
			</p>
		</HomeSectionLayout>
	);
}
