import classNames from "classnames";
import React from "react";
import styles from "./ProjectsSection.module.css";

import projects from "@data/projects.json";
import LinkIcon from "@svg/icons/link-icon.svg";
import GhIcon from "@svg/icons/github-icon.svg";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import HomeSectionLayout from "../HomeSectionLayout/HomeSectionLayout";

//  ---------- Cards ----------- //
function ProjectCard({ id, name, description, ghLink, liveLink, img, tools, tags, favorite }) {
	const { ref: projectRef, inView } = useInView({ triggerOnce: true });
	return (
		<>
			<div
				className={classNames(
					styles.projectContainer,
					inView ? styles.inView : styles.notInView
				)}
				style={{
					backgroundImage: `url(${img.desktop})`,
				}}
				ref={projectRef}
			>
				<div className={styles.projectText}>
					<h4 className={styles.projectTitle}>{name}</h4>
					<p className={styles.projectDesc}>{description}</p>
				</div>
				<div className={styles.links}>
					<Link href={liveLink} target="_blank">
						<LinkIcon className={styles.linkIcon} />
					</Link>
					<Link href={ghLink} target="_blank">
						<GhIcon className={styles.linkIcon} />
					</Link>
				</div>
				<div className={styles.overlay}></div>
			</div>
		</>
	);
}

export default function ProjectsSection() {
	return (
		<HomeSectionLayout
			sectionId="projects"
			sectionWrapper={styles.sectionWrapper}
			sectionTitle={"Projetos"}
		>
			<div className={classNames(styles.projectsWrapper)}>
				{projects.map((el) => {
					return <ProjectCard key={el.id} {...el} />;
				})}
			</div>
		</HomeSectionLayout>
	);
}
