import React, { useState, useEffect, useRef } from "react";
import desktopNav from "./DesktopNav.module.css";
import burgerNav from "./BurgerNav.module.css";
import LnIcon from "@svg/icons/linkedin-icon.svg";
import GhIcon from "@svg/icons/github-icon.svg";
import classNames from "classnames";
import Link from "next/link";
import SocialBox from "@components/SocialBox/SocialBox";

export function MainNav({ type }) {
	function scroll(id) {
		const section = document.getElementById(id);
		section.scrollIntoView({ behavior: "smooth" });
		window.location.hash = id;
	}
	return (
		<nav className={type.nav}>
			<div className={classNames(type.navWrapper)}>
				<ul>
					<li>
						<a onClick={() => scroll("about")}>Sobre Mim</a>
					</li>
					<li>
						<a onClick={() => scroll("skills")}>Skillset</a>
					</li>
					<li>
						{/* <a href="javascript:document.getElementById('projects').scrollIntoView(true);">
							Projetos
						</a> */}
						<a onClick={() => scroll("projects")}>Projetos</a>
					</li>
					<li>
						<a onClick={() => scroll("contact")} className={type.contact}>
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
	useEffect(() => {
		document.body.style.overflow = showBurger ? "hidden" : "unset";
	}, [showBurger]);

	useEffect(() => {
		const aside = asideRef.current;
		function closeBurger(e) {
			// e.stopPropagation();
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
		<div className={classNames(showBurger && burgerNav.burgerActive, burgerNav.burger)}>
			<div
				className={classNames(burgerNav.burgerContainer)}
				onClick={() => setShowBurger((prev) => !prev)}
			>
				<div className={classNames(burgerNav.burgerBtn)}></div>
			</div>

			<div className={classNames(burgerNav.asideWrapper)} ref={asideRef}>
				<a href="#" className={burgerNav.backToTop}>
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
	return (
		<>
			<BurgerNav type={burgerNav} /> <MainNav type={desktopNav} />
		</>
	);
}
