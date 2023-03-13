import MainCard from "@components/MainCard/MainCard";
import React from "react";
import GhIcon from "@svg/icons/github-icon.svg";
import WebPageIcon from "@svg/icons/web-page.svg";
import ReactIcon from "@svg/icons/react-solid.svg";
import styles from "./SkillsSection.module.css";
import classNames from "classnames";

export default function SkillsSection() {
	return (
		<section>
			<div className={classNames("container", styles.sectionWrapper)}>
				<h3 className="section-title">Skillset</h3>
				<div className={styles.cardsWrapper}>
					<MainCard
						svg={<WebPageIcon />}
						title={"Linguagens"}
						text={
							"Sei criar sites com HTML acessível, CSS responsivo e deixar as coisas dinâmicas com Javascript."
						}
					/>
					<MainCard
						svg={<GhIcon />}
						title={"Versionamento"}
						text={"Tenho experiência com controle de versão no GitHub."}
					/>
					<MainCard
						svg={<ReactIcon />}
						title={"Frameworks e libs"}
						text={"Tenho conhecimentos em React.JS e Next.JS."}
					/>
				</div>
			</div>
		</section>
	);
}
