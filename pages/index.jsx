import Footer from "@components/Footer/Footer";
import AboutSection from "@components/Pages/Home/AboutSection/AboutSection";
import HomeHero from "@components/Pages/Home/HeroSection/HomeHero";
import ProjectsSection from "@components/Pages/Home/ProjectsSection/ProjectsSection";
import SkillsSection from "@components/Pages/Home/SkillsSection/SkillsSection";
import ContactSection from "@components/Pages/Home/ContactSection/ContactSection";
import Head from "next/head";
import Header from "@components/Header/Header";

import React from "react";
import ShortAbout from "@components/Pages/Home/ShortAbout/ShortAbout";

export default function Home() {
	return (
		<>
			<Head>
				<title>Gabriel Gusso | Portfólio</title>
				<meta
					name="description"
					content="Desenvolvedor front-end localizado em Curitiba, PR."
					key="desc"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div
				id="hero-section"
				style={{
					minHeight: "100dvh",
				}}
			>
				<Header />
				<HomeHero />
			</div>
			<ShortAbout />
			<SkillsSection />

			<ProjectsSection />

			{/* <AboutSection /> */}

			<ContactSection />
			<Footer />
		</>
	);
}
