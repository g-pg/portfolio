import React from "react";
import styles from "./Nav.module.css";
import LnIcon from "@svg/icons/linkedin-icon.svg";
import GhIcon from "@svg/icons/github-icon.svg";
import classNames from "classnames";
import Link from "next/link";

export default function Nav() {
	return (
		<nav className={styles.mainNav}>
			<div className={classNames(styles.navWrapper, "container navwrapper flex-align")}>
				<ul>
					<li>
						<a href="#skills" className={classNames(styles.link, styles.contato)}>
							Skillset
						</a>
					</li>
					<li>
						<a
							href="#projects"
							className={classNames(styles.link, styles.projetos)}
						>
							Projetos
						</a>
					</li>
					<li>
						<a href="#about" className={classNames(styles.link, styles.sobre)}>
							Sobre Mim
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className={classNames(styles.link, styles.contato)}
						>
							Contato
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
