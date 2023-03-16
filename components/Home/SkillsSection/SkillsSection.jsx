import MainCard from "@components/MainCard/MainCard";
import React, { useRef } from "react";
import GhIcon from "@svg/icons/github-icon.svg";
import WebPageIcon from "@svg/icons/web-page.svg";
import ReactIcon from "@svg/icons/react-solid.svg";

import styles from "./SkillsSection.module.css";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";

export default function SkillsSection() {
	const { ref: sectionRef, inView } = useInView();
	console.log(inView);

	return (
		<section className="home-section" id="skills" ref={sectionRef}>
			<div className={classNames("container", styles.sectionWrapper)}>
				<h3 className={classNames("section-title", inView ? "inView" : "notInView")}>
					Skillset
				</h3>
				<div className={classNames(styles.cardsWrapper, inView && styles.inView)}>
					<div className={styles.card}>
						<MainCard
							svg={<WebPageIcon />}
							title={"Linguagens"}
							text={
								"Sei criar sites com HTML acessível, CSS responsivo e deixar as coisas dinâmicas com Javascript."
							}
						/>
					</div>
					<div className={styles.card}>
						<MainCard
							svg={<GhIcon />}
							title={"Versionamento"}
							text={"Tenho experiência com controle de versão no GitHub."}
						/>
					</div>
					<div className={styles.card}>
						<MainCard
							svg={<ReactIcon />}
							title={"Frameworks e libs"}
							text={"Tenho conhecimentos em React.JS e Next.JS."}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
