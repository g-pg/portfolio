import React from "react";

import classNames from "classnames";

import styles from "./SocialBox.module.css";
import LnIcon from "@svg/icons/linkedin-icon.svg";
import GhIcon from "@svg/icons/github-icon.svg";
import MailIcon from "@svg/icons/email.svg";

export default function SocialBox({ style, iconWidth }) {
	const width = iconWidth || "35px";
	function scroll(id) {
		const section = document.getElementById(id);
		section.scrollIntoView({ behavior: "smooth" });
		window.location.hash = id;
	}
	return (
		<div className={classNames(styles.socialWrapper, "flex-align")} style={style}>
			<a href="https://www.linkedin.com/in/ggusso/" target="_blank" title="Linkedin">
				<LnIcon className={classNames(styles.socialIcon, styles.ln)} width={width} />
			</a>
			<a href="https://github.com/g-pg" target="_blank" title="Github">
				<GhIcon className={classNames(styles.socialIcon, styles.gh)} width={width} />
			</a>

			<button onClick={() => scroll("contact")} title="Contato">
				<MailIcon
					className={classNames(styles.socialIcon, styles.mail)}
					width={width}
				/>
			</button>
		</div>
	);
}
