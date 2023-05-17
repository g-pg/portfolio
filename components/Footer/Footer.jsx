import { PrimaryText, HighLight } from "@components/Pages/Home/HomeSectionLayout/HomeSectionLayout";
import SocialBox from "@components/SocialBox/SocialBox";
import classNames from "classnames";
import React from "react";
import styles from "./Footer.module.css";
export default function Footer() {
	return (
		<footer className={styles.footerWrapper}>
			<div className={classNames("container", styles.footerWrapper)}>
				<SocialBox style={{ gap: "1.2rem" }} iconWidth="25px" />
			</div>
			<PrimaryText style={{ fontSize: "0.7rem", width: "auto", marginTop: "-0.5rem" }}>
				Desenvolvido em <HighLight>NextJS</HighLight> .
			</PrimaryText>
		</footer>
	);
}
