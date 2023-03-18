import MainCard from "@components/MainCard/MainCard";
import React, { useRef } from "react";
import GhIcon from "@svg/icons/github-icon.svg";
import WebPageIcon from "@svg/icons/web-page.svg";
import ReactIcon from "@svg/icons/react-solid.svg";

import styles from "./SkillsSection.module.css";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";
import HomeSectionLayout from "../HomeSectionLayout/HomeSectionLayout";

export default function SkillsSection() {
	const { ref: wrapperRef, inView } = useInView({ triggerOnce: true });
	console.log(inView);

	return (
		<HomeSectionLayout
			sectionId={"skills"}
			sectionWrapper={styles.sectionWrapper}
			sectionTitle={"Skillset"}
		>
			<div
				className={classNames(styles.cardsWrapper, inView && styles.inView)}
				ref={wrapperRef}
			>
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
						text={"Experiência com controle de versão no GitHub."}
					/>
				</div>
				<div className={styles.card}>
					<MainCard
						svg={<ReactIcon />}
						title={"Frameworks e libs"}
						text={"Conhecimentos em React/NextJS."}
					/>
				</div>
			</div>
		</HomeSectionLayout>
	);
}
