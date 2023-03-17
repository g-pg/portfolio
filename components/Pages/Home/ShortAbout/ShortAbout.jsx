import React from "react";
import HomeSectionLayout, { PrimaryText } from "../HomeSectionLayout/HomeSectionLayout";
import styles from "./ShortAbout.module.css";
export default function ShortAbout() {
	return (
		// <>
		<HomeSectionLayout>
			<PrimaryText style={{ color: "var(--cl-main-dark)" }}>
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
				<br />
				<br /> Meu nome é Gabriel. <br />
				<br /> Eu me formei em Direito em 2017, mas resolvi fazer{" "}
				<span style={{ textDecoration: "line-through", color: "grey" }}>errado</span> o
				que realmente me interessa. Comecei a estudar programação no início de 2023 e,
				desde então, passei a acordar sabendo que <b>estou no lugar certo.</b>
				{/* </span> */}
			</PrimaryText>
			<br />
		</HomeSectionLayout>
		// </>
	);
}
