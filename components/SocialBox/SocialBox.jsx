import React from "react";

import classNames from "classnames";

import styles from "./SocialBox.module.css";
import LnIcon from "@svg/icons/linkedin-icon.svg";
import GhIcon from "@svg/icons/github-icon.svg";
import MailIcon from "@svg/icons/email.svg";

export default function SocialBox() {
	return (
		<div className={classNames(styles.socialWrapper, "flex-align")}>
			<a href="#">
				<LnIcon className={classNames(styles.socialIcon, styles.ln)} />
			</a>
			<a href="#">
				<GhIcon className={classNames(styles.socialIcon, styles.gh)} />
			</a>
			<a href="#">
				<MailIcon className={classNames(styles.socialIcon, styles.mail)} />
			</a>
		</div>
	);
}
