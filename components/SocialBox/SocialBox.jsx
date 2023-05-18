import React from "react";

import classNames from "classnames";

import styles from "./SocialBox.module.css";

import { FaDev, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
export default function SocialBox({ style, iconWidth }) {
	const width = iconWidth || "35";
	function scroll(id) {
		const section = document.getElementById(id);
		section.scrollIntoView({ behavior: "smooth" });
		window.location.hash = id;
	}
	return (
		<div className={classNames(styles.socialWrapper, "flex-align")} style={style}>
			<a href="https://www.linkedin.com/in/ggusso/" target="_blank" title="Linkedin">
				<FaLinkedin
					className={classNames(styles.socialIcon, styles.ln)}
					fontSize={width}
				/>
			</a>
			<a href="https://github.com/g-pg" target="_blank" title="Github">
				<FaGithub
					className={classNames(styles.socialIcon, styles.gh)}
					fontSize={width}
				/>
			</a>
			<a href="https://dev.to/gpg" target="_blank" title="Dev.to">
				<FaDev className={classNames(styles.socialIcon, styles.gh)} fontSize={width} />
			</a>

			<button
				onClick={() => scroll("contact")}
				title="Contato"
				style={{ marginLeft: "-5px" }}
			>
				<IoMdMail
					className={classNames(styles.socialIcon, styles.mail)}
					fontSize={Number(width) + 5 + "px"}
				/>
			</button>
		</div>
	);
}
