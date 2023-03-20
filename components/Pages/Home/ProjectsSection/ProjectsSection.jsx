import classNames from "classnames";
import React from "react";
import styles from "./ProjectsSection.module.css";

import projects from "@data/projects.json";
import LinkIcon from "@svg/icons/link-icon.svg";
import GhIcon from "@svg/icons/github-icon.svg";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import HomeSectionLayout, { PrimaryText } from "../HomeSectionLayout/HomeSectionLayout";
import PrimaryBtn from "@components/Buttons/PrimaryBtn";
import Image from "next/image";

//  ---------- Cards ----------- //
function ProjectCard({ id, name, description, ghLink, liveLink, img, tools, tags, favorite }) {
	const { ref: projectRef, inView } = useInView({ triggerOnce: true });
	return (
		<>
			{" "}
			<div
				className={classNames(
					styles.projectContainer,
					inView ? styles.inView : styles.notInView
				)}
				ref={projectRef}
			>
				<Image
					// style={{
					// 	backgroundImage: `url(${img.desktop})`,
					// }}
					className={styles.image}
					alt={name}
					src={img.desktop}
					fill="true"
					object-fit="cover"
				/>
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
				{/* </div> */}
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
			{/* <PrimaryText style={{ textAlign: "center", marginBottom: "3rem" }}>
				Essas são algumas das coisas que eu venho fazendo.
			</PrimaryText> */}
			<div className={classNames(styles.projectsWrapper)}>
				{projects.map((el) => {
					return <ProjectCard key={el.id} {...el} />;
				})}
			</div>
			<PrimaryBtn
				color="white"
				style={{
					maxWidth: "200px",
					fontSize: "0.7rem",
					fontWeight: "600",
					marginTop: "2.5rem",
					alignSelf: "flex-end",
				}}
			>
				<Link href="https://github.com/g-pg" target="_blank">
					Veja mais no meu GitHub!
				</Link>
			</PrimaryBtn>
		</HomeSectionLayout>
	);
}
