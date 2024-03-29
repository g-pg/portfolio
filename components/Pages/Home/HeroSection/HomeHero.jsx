import React, { useState } from "react";

import classNames from "classnames";
import styles from "./HomeHero.module.css";
import Typewriter from "typewriter-effect";

import MinimizeIcon from "@svg/minimize.svg";
import MaximizeIcon from "@svg/maximize.svg";
import CloseIcon from "@svg/close.svg";

import SocialBox from "@components/SocialBox/SocialBox";
import { useInView } from "react-intersection-observer";

export default function HomeHero() {
	const [isTyping, setIsTyping] = useState(true);
	const [minimized, setMinimized] = useState(false);
	const [maximized, setMaximized] = useState(false);

	const { ref: sectionRef, inView } = useInView({ triggerOnce: true });

	return (
		<section className={styles.section}>
			<div className="container">
				<div
					className={classNames(styles.sectionWrapper)}
					ref={sectionRef}
					style={{
						opacity: inView ? "1" : "0",
						transform: inView ? "unset" : "translateX(-300px)",
						transition: "all 0.5s ease",
					}}
				>
					<div className={styles.textCol}>
						<p className={styles.hello}>olá, meu nome é</p>
						<h1>Gabriel Gusso</h1>
						{/* <p className={styles.subText}>
							desenvolvedor front-end localizado em Curitiba, PR.
						</p> */}
						<SocialBox />
					</div>
					<div className={styles.imgCol}>
						<WindowFrame
							classNames={classNames}
							isTyping={isTyping}
							setIsTyping={setIsTyping}
							minimized={minimized}
							maximized={maximized}
							setMinimized={setMinimized}
							setMaximized={setMaximized}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

function WindowFrame({ isTyping, setIsTyping, minimized, maximized, setMinimized, setMaximized }) {
	return (
		<div
			className={classNames(
				styles.frameWrapper,
				isTyping ? styles.typing : styles.noTyping,
				minimized && styles.minimized,
				maximized && styles.maximized
			)}
		>
			<div className={classNames(styles.frameBar, "flex-align")}>
				<a href="#" className={styles.fileName} aria-hidden>
					heroSection.jsx
				</a>
				<div className={classNames(styles.controls, "flex-align")}>
					<MinimizeIcon
						className={styles.minimize}
						onClick={() => {
							setMinimized(!minimized);
							setMaximized(false);
						}}
					/>
					<MaximizeIcon
						className={styles.maximize}
						onClick={() => {
							setMaximized(minimized ? false : !maximized);
							setMinimized(false);
						}}
					/>
					<CloseIcon className={styles.close} onClick={() => alert("😧")} />
				</div>
			</div>
			<div className={styles.frameWindow} aria-hidden>
				<Typewriter
					onInit={(typewriter) => {
						typewriter
							.pauseFor(800)
							.changeDelay(30)
							.typeString("<")
							.typeString("h2>")
							.typeString(
								'<h2> <span class="span-dev">Desenvolvedor web</span> localizado em Curitiba, PR.</h2> '
							)
							.changeDelay(60)
							.callFunction(() => setIsTyping(!isTyping))
							.typeString("</h2>")
							.start();
					}}
					options={{
						wrapperClassName: styles.typewriter,
						cursorClassName: styles.typewriterCursor,
						delay: 40,
						skipAddStyles: true,
					}}
				/>
			</div>
		</div>
	);
}
