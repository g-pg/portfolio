import PrimaryBtn from "@components/Buttons/PrimaryBtn";
import React from "react";
import HomeSectionLayout, { PrimaryText, HighLight } from "../HomeSectionLayout/HomeSectionLayout";
import styles from "./ShortAbout.module.css";
import classNames from "classnames";
import Link from "next/link";
export default function ShortAbout() {
	const color = { color: "var(--cl-main-dark)" };

	return (
		// <>
		<HomeSectionLayout
			sectionWrapper={styles.sectionWrapper}
			sectionClass={styles.sectionClass}
		>
			<PrimaryText style={color}>
				{/* <span style={{textAlign: "center"}> */}
				<span
					style={{
						fontWeight: "700",
						fontSize: "2rem",
						fontFamily: "var(--roboto)",
					}}
				>
					Olá!
				</span>
			</PrimaryText>
			<PrimaryText style={color}>
				Eu me formei em Direito pela PUC-PR no final de 2017, mas descobri recentemente
				que meu coração está em outro lugar. Comecei a estudar programação de forma
				autônoma em 2023 e não há dia em que eu acorde menos apaixonado por essa área.
				{/* <br />
				<br /> */}{" "}
				<br />
				<br />
				Meu foco atual é desenvolvimento web, especialmente <i>front end</i>. Por isso
				venho estudando as ferramentas e <i>libraries</i> mais utilizadas no mercado.
				<br />
				<br />
				Também estou buscando a minha primeira experiência profissional. Entre em
				contato comigo!
				<br />
				<br />
				<PrimaryBtn
					style={{
						width: "150px",
						margin: "0 auto",
					}}
					color="accent"
				>
					<a href="#contact">Contato</a>
				</PrimaryBtn>
			</PrimaryText>
			<br />
		</HomeSectionLayout>
		// </>
	);
}
