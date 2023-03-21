import MainCard from "@components/MainCard/MainCard";
import React, { useRef } from "react";

import GhIcon from "@svg/icons/github-icon.svg";
import WebPageIcon from "@svg/icons/web-page.svg";
import ReactIcon from "@svg/icons/react-solid.svg";
import USAFlag from "@svg/icons/usa-flag.svg";

import SpeechBubble from "@svg/icons/speech-bubble.svg";
import styles from "./SkillsSection.module.css";
import classNames from "classnames";

import HomeSectionLayout from "../HomeSectionLayout/HomeSectionLayout";

export default function SkillsSection() {
	// const { ref: cardRef, inView } = useInView({ triggerOnce: true });

	return (
		<HomeSectionLayout
			sectionId={"skills"}
			sectionWrapper={styles.sectionWrapper}
			sectionTitle={"Skillset"}
		>
			<div className={classNames(styles.cardsWrapper)}>
				<MainCard
					svg={<WebPageIcon />}
					title={"Linguagens"}
					text={
						"Sei criar sites com HTML acessível, CSS resposivo e deixar as coisas dinâmicas com Javascript."
					}
				/>

				{/* <MainCard
					svg={<GhIcon />}
					title={"Versionamento"}
					text={"Controle de versão no GitHub."}
				/> */}

				<MainCard
					svg={<ReactIcon />}
					title={"Frameworks e libs"}
					text={"Conhecimentos em React/NextJS, incluindo react-router-dom."}
				/>
				<MainCard
					svg={<SpeechBubble />}
					title={"Idiomas"}
					text={"Leio e escrevo muito bem em inglês."}
				/>
			</div>
		</HomeSectionLayout>
	);
}
