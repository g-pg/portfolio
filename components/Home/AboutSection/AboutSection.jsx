import classNames from "classnames";
import React from "react";
import styles from "./AboutSection.module.css";
export default function AboutSection() {
	return (
		<section className={classNames("home-section container", styles.sectionWrapper)}>
			<h3 className="section-title">Sobre mim</h3>
			<p>
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
		</section>
	);
}
