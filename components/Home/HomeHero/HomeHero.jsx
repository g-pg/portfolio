import React, { useState } from "react";
import classNames from "classnames";
import styles from "./HomeHero.module.css";

import MinimizeIcon from "@svg/minimize.svg";
import MaximizeIcon from "@svg/maximize.svg";
import CloseIcon from "@svg/close.svg";
import Typewriter from "typewriter-effect";

export default function HomeHero() {
	const [isTyping, setIsTyping] = useState(true);
	const [minimized, setMinimized] = useState(false);
	const [maximized, setMaximized] = useState(false);
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
							<span style={{ color: "var(--ln-blue)" }}>/ggusso</span>
						</h3>
						<h3>
							&gt; meu e-mail é{" "}
							<span style={{ color: "var(--orange)" }}>
								gabrielpgusso@gmail.com
							</span>
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
										.changeDelay(30)
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
					<p
						className={styles.smiley}
						style={{ transform: minimized ? "translate(0, -50%)" : "" }}
					>
						{"Ei! Ponha a peça de volta no lugar!"}
					</p>
				</div>
			</div>
		</section>
	);
}
