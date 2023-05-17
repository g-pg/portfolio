import classNames from "classnames";
import React, { useState } from "react";
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
function ProjectCard({
	id,
	name,
	description,
	ghLink,
	liveLink,
	img,
	tools,
	tags,
	favorite,
	nickname,
}) {
	const { ref: containerRef, inView } = useInView({ triggerOnce: true });

	const [showBtns, setShowBtns] = useState(false); //evita que o usuário clique acidentalmente em mobile
	return (
		<>
			<div
				className={classNames(
					styles.projectContainer,
					inView ? styles.inView : styles.notInView,
					nickname
				)}
				ref={containerRef}
				onMouseEnter={() => setShowBtns(true)}
				onMouseLeave={() => setShowBtns(false)}
			>
				<Image
					className={styles.image}
					alt={name}
					src={img.desktop}
					fill="true"
					object-fit="cover"
					quality={100}
				/>
				<div className={styles.projectText}>
					<h4 className={styles.projectTitle}>{name}</h4>
					<p className={styles.projectDesc}>{description}</p>
				</div>
				<div
					className={styles.links}
					style={{ pointerEvents: showBtns ? "unset" : "none" }}
				>
					<Link href={liveLink} target="_blank">
						<LinkIcon className={styles.linkIcon} />
					</Link>
					<Link href={ghLink} target="_blank">
						<GhIcon className={styles.linkIcon} />
					</Link>
				</div>
				<div className={styles.overlay}></div>
			</div>
			<style jsx>
				{`
					${`.${nickname} {grid-area: ${nickname}}`}
				`}
			</style>
		</>
	);
}

export default function ProjectsSection() {
	//nicknames: "wordle", "malu", "ecommerce", "dropdown", "muvi", "todo", "landing-vue"
	const projectsToRender = ["wordle", "malu", "ecommerce", "dropdown", "muvi", "landing-vue"];
	return (
		<HomeSectionLayout
			sectionId="projects"
			sectionWrapper={styles.sectionWrapper}
			sectionTitle={"Projetos"}
		>
			<div className={classNames(styles.projectsWrapper)}>
				{projects.map((el) => {
					if (projectsToRender.includes(el.nickname)) {
						return <ProjectCard key={el.id} {...el} />;
					}
				})}
			</div>
			<Link
				href="https://github.com/g-pg"
				target="_blank"
				style={{
					alignSelf: "flex-end",
					marginTop: "1rem",
				}}
			>
				<PrimaryBtn
					color="white"
					style={{
						maxWidth: "200px",
						fontSize: "0.7rem",
						fontWeight: "600",
					}}
				>
					Veja mais no meu Github!
				</PrimaryBtn>
			</Link>
		</HomeSectionLayout>
	);
}
