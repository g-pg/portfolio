import React, { useState } from "react";
import classNames from "classnames";
import styles from "./HomeHero.module.css";

import MinimizeIcon from "../../public/svg/minimize.svg";
import MaximizeIcon from "../../public/svg/maximize.svg";
import CloseIcon from "../../public/svg/close.svg";
import Typewriter from "typewriter-effect";

export default function HomeHero() {
	const [isTyping, setIsTyping] = useState(true);
	const [minimized, setMinimized] = useState(false);
	const [maximized, setMaximized] = useState(false);
	console.log(isTyping);
	return (
		<section className={styles.section}>
			<div className={classNames(styles.sectionWrapper, "container")}>
				<div className={styles.textCol}>
					<p style={{ color: "grey" }}>{`// Olá, meu nome é`}</p>
					<h1>Gabriel Gusso</h1>
					<div className={styles.subText}>
						<h3>
							&gt; meu github é{" "}
							<span style={{ color: "var(--gh-purple" }}>/g-pg</span>
						</h3>

						<h3>
							&gt; meu linkedin é{" "}
							<span style={{ color: "var(--ln-blue)" }}>/gabrielpgusso</span>
						</h3>
					</div>
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
							<p className={styles.fileName}>heroSection.jsx</p>
							<div className={classNames(styles.controls, "flex-align")}>
								<MinimizeIcon
									className={styles.minimize}
									onClick={() => {
										setMinimized(true);
										setMaximized(false);
									}}
								/>
								<MaximizeIcon
									className={styles.maximize}
									onClick={() => {
										setMinimized(false);
										setMaximized(!maximized);
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
										.changeDelay(200)
										.typeString("<")
										.typeString("h2>")
										.changeDelay(50)
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
					<p className={styles.smiley}>{":)"}</p>
				</div>
			</div>
		</section>
	);
}
