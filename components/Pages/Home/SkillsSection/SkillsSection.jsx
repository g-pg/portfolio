import MainCard from "@components/MainCard/MainCard";
import React from "react";

import WebPageIcon from "@svg/icons/web-page.svg";
import ReactIcon from "@svg/icons/react-solid.svg";
import {
	IconCSS,
	IconGh,
	IconHtml,
	IconJS,
	IconMongo,
	IconNext,
	IconNode,
	IconPrisma,
	IconReact,
	IconTS,
	IconVite,
	IconVue,
} from "@components/ToolsIcons/ToolsIcons";
import SpeechBubble from "@svg/icons/speech-bubble.svg";
import styles from "./SkillsSection.module.css";
import classNames from "classnames";

import HomeSectionLayout from "../HomeSectionLayout/HomeSectionLayout";

export default function SkillsSection() {
	return (
		<HomeSectionLayout
			sectionId={"skills"}
			sectionWrapper={styles.sectionWrapper}
			sectionTitle={"Skillset"}
		>
			<div className={styles.wrapper}>
				<div className={classNames(styles.cardsWrapper)}>
					<MainCard
						svg={<WebPageIcon />}
						title={"Linguagens"}
						text={
							"Sei criar sites com HTML acessível, CSS resposivo e deixar as coisas dinâmicas com Javascript."
						}
					/>
					<MainCard
						svg={<ReactIcon />}
						title={"Frameworks e libs"}
						text={"Conhecimentos em React/NextJS e ferramentas relacionadas."}
					/>
					<MainCard
						svg={<SpeechBubble />}
						title={"Idiomas"}
						text={"Leio e escrevo muito bem em inglês."}
					/>
				</div>
				<div className={styles.tools}>
					<IconHtml />
					<IconCSS />
					<IconJS />
					<IconGh />
					<IconReact />
					<IconNext />
					<IconVue />
					<IconVite />
					<IconTS />
					<IconPrisma />
					<IconMongo />
					<IconNode />
				</div>
			</div>
		</HomeSectionLayout>
	);
}
