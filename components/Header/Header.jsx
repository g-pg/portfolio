import React from "react";
import Nav from "@components/Nav/Nav";
import styles from "./Header.module.css";
import classNames from "classnames";
export default function Header() {
	return (
		<header className={styles.header}>
			<div className={classNames(styles.headerWrapper, "container flex-align")}>
				<Nav />
			</div>
		</header>
	);
}
