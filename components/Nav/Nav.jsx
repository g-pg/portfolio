import React, { useState, useEffect } from "react";
import desktopNav from "./DesktopNav.module.css";
import burgerNav from "./BurgerNav.module.css";
import LnIcon from "@svg/icons/linkedin-icon.svg";
import GhIcon from "@svg/icons/github-icon.svg";
import classNames from "classnames";
import Link from "next/link";

export function MainNav({ type }) {
	return (
		<nav className={type.nav}>
			<div className={classNames(type.navWrapper)}>
				<ul>
					<li>
						<a href="#skills">Skillset</a>
					</li>
					<li>
						<a href="#projects">Projetos</a>
					</li>
					<li>
						<a href="#about">Sobre Mim</a>
					</li>
					<li>
						<a href="#contact">Contato</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

function BurgerNav() {
	const [showBurger, setShowBurger] = useState(false);

	function BurgerBtn() {
		return (
			<div
				className={burgerNav.burgerContainer}
				onClick={() => setShowBurger(!showBurger)}
			>
				<div className={burgerNav.burgerBtn}></div>
			</div>
		);
	}

	return (
		<>
			<BurgerBtn />
			<div className={classNames(burgerNav.asideWrapper, showBurger && burgerNav.active)}>
				<BurgerBtn />
				<MainNav type={burgerNav} />
			</div>
		</>
	);
}

export default function Nav() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		function handleResize() {
			window.innerWidth < 780 ? setIsMobile(true) : setIsMobile(false);
		}

		window.addEventListener("resize", handleResize);
		handleResize(); //executa pelo menos uma vez para checar o window size inicial
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return <>{isMobile ? <BurgerNav /> : <MainNav type={desktopNav} />}</>;
}
