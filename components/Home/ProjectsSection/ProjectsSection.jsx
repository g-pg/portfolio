import classNames from "classnames";
import React from "react";
import styles from "./ProjectsSection.module.css";

import projects from "../../../data/projects.json";

function ProjectCard({ id, name, description, ghLink, liveLink, img, tools, tags, favorite }) {
	return (
		<>
			{/* <div className={styles.projectWrapper}> */}
			<div
				className={classNames(styles.projectContainer)}
				style={{
					backgroundImage: `url(${img.desktop})`,
				}}
			>
				<div className={styles.overlay}></div>
			</div>

			{/* </div> */}
		</>
	);
}

export default function ProjectsSection() {
	return (
		<section className="home-section" id="projects">
			<div className={classNames("container", styles.sectionWrapper)}>
				<h3 className="section-title">Projetos</h3>
				<div className={styles.projectsWrapper}>
					{projects.map((el) => {
						return <ProjectCard key={el.id} {...el} />;
					})}
				</div>
			</div>
		</section>
	);
}
