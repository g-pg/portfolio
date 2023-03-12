import React from "react";
import styles from "./Nav.module.css";
import LnIcon from "@svg/icons/linkedin-icon.svg";
import GhIcon from "@svg/icons/github-icon.svg";
import classNames from "classnames";

export default function Nav() {
	return (
		<nav className={styles.mainNav}>
			<div className={classNames(styles.navWrapper, "container navwrapper flex-align")}>
				<div className={classNames(styles.socialWrapper, "flex-align")}>
					<a href="#">
						<LnIcon className={classNames(styles.socialIcon, styles.ln)} />
					</a>
					<a href="#">
						<GhIcon className={classNames(styles.socialIcon, styles.gh)} />
					</a>
				</div>
				<ul>
					<li>
						<a href="#" className={classNames(styles.link, styles.projetos)}>
							Projetos
						</a>
					</li>
					<li>
						<a href="#" className={classNames(styles.link, styles.sobre)}>
							Sobre Mim
						</a>
					</li>
					<li>
						<a href="#" className={classNames(styles.link, styles.contato)}>
							Contato
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
