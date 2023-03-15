import React, { useState, useRef, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import styles from "./HomeHero.module.css";
import Typewriter from "typewriter-effect";

import MinimizeIcon from "@svg/minimize.svg";
import MaximizeIcon from "@svg/maximize.svg";
import CloseIcon from "@svg/close.svg";

import SocialBox from "@components/SocialBox/SocialBox";
import Tape from "../../../public/img/tape4.png";
export default function HomeHero() {
	const [isTyping, setIsTyping] = useState(true);
	const [minimized, setMinimized] = useState(false);
	const [maximized, setMaximized] = useState(false);

	return (
		<section className={styles.section}>
			<div className="container">
				<div className={classNames(styles.sectionWrapper)}>
					<div className={styles.textCol}>
						<p className={styles.hello}>{`// olá, meu nome é`}</p>
						<h1>Gabriel Gusso</h1>
						<p className={styles.subText}>
							_desenvolvedor front-end localizado em Curitiba, PR.
						</p>
						<SocialBox />
					</div>
					<div className={styles.imgCol}>
						<div
							className={classNames(
								styles.frameWrapper,
								isTyping ? styles.typing : styles.noTyping,
								minimized ? styles.minimized : "",
								maximized ? styles.maximized : ""
							)}
						>
							<div className={classNames(styles.frameBar, "flex-align")}>
								<a href="#hero-section" className={styles.fileName}>
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
									<CloseIcon
										className={styles.close}
										onClick={() => alert("😧")}
									/>
								</div>
							</div>
							<div className={styles.frameWindow}>
								<Typewriter
									onInit={(typewriter) => {
										typewriter
											.pauseFor(500)
											// .changeDelay(200)
											.changeDelay(40)
											.typeString("<")
											.typeString("h2>")
											.typeString(
												'<h2> Eu gosto de programar e estou buscando experiência profissional em <span class="span-dev">desenvolvimento web</span>.</h2> '
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
						<div
							className={styles.smiley}
							// style={{
							// 	transform: minimized ? "translate(0, -50%)" : "",
							// }}
						>
							<Image src={Tape} alt="fita-crepe.png" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
