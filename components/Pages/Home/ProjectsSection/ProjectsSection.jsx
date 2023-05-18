import classNames from "classnames";
import React, { useState } from "react";
import styles from "./ProjectsSection.module.css";
import projects from "@data/projects.json";
import { FaGithub } from "react-icons/fa";
import { RxExternalLink } from "react-icons/rx";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import HomeSectionLayout from "../HomeSectionLayout/HomeSectionLayout";
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
				<p className={styles.projectDesc}>
					<span>{description}</span>
				</p>
			</div>
			<div className={styles.links} style={{ pointerEvents: showBtns ? "unset" : "none" }}>
				<Link href={liveLink} target="_blank">
					<RxExternalLink className={styles.icon} />
				</Link>
				<Link href={ghLink} target="_blank">
					<FaGithub className={styles.icon} />
				</Link>
			</div>
			<div className={styles.overlay}></div>
			<style jsx>
				{`
					${`.${nickname} {grid-area: ${nickname}}`}
				`}
			</style>
		</div>
	);
}

export default function ProjectsSection() {
	// prettier-ignore
	const projectsToRender = {
			'wordle': true,
			'malu': true,
			'ecommerce': true,
			'dropdown': true,
			'muvi': true,
			'todo': false,
			'landing-vue': true,
			'snek': false,
			'flepburd': false,
			'dinosor': true,
			'jokenpo': true,
		};

	return (
		<HomeSectionLayout
			sectionId="projects"
			sectionWrapper={styles.sectionWrapper}
			sectionTitle={"Projetos"}
		>
			<div className={classNames(styles.projectsWrapper)}>
				{projects.map((el) => {
					if (projectsToRender[el.nickname]) {
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
