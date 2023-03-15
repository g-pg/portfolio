import React, { useState, useEffect, useRef } from "react";
import desktopNav from "./DesktopNav.module.css";
import burgerNav from "./BurgerNav.module.css";
import LnIcon from "@svg/icons/linkedin-icon.svg";
import GhIcon from "@svg/icons/github-icon.svg";
import classNames from "classnames";
import Link from "next/link";
import SocialBox from "@components/SocialBox/SocialBox";

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
						<a href="#contact" className={type.contact}>
							Contato
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

function BurgerNav() {
	const [showBurger, setShowBurger] = useState(false);

	const asideRef = useRef(null);
	// useEffect(() => {
	// 	document.body.style.overflow = showBurger ? "hidden" : "unset";
	// }, [showBurger]);

	useEffect(() => {
		const aside = asideRef.current;
		function closeBurger(e) {
			e.stopPropagation();
			if (e.target != aside) {
				setShowBurger(false);
			}
		}
		aside.addEventListener("click", closeBurger);

		return () => {
			aside.removeEventListener("click", closeBurger);
		};
	}, [showBurger]);

	return (
		<div className={showBurger ? burgerNav.burgerActive : ""}>
			<div
				className={classNames(burgerNav.burgerContainer)}
				onClick={() => setShowBurger((prev) => !prev)}
			>
				<div className={classNames(burgerNav.burgerBtn)}></div>
			</div>

			<div className={classNames(burgerNav.asideWrapper)} ref={asideRef}>
				<a href="#hero-section" className={burgerNav.backToTop}>
					Voltar ao topo
				</a>
				<MainNav type={burgerNav} />
				<div className={burgerNav.socialBox}>
					<SocialBox />
				</div>
			</div>
		</div>
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
