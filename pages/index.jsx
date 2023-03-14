import Footer from "@components/Footer/Footer";
import AboutSection from "@components/Home/AboutSection/AboutSection";
import HomeHero from "@components/Home/HeroSection/HomeHero";
import ProjectsSection from "@components/Home/ProjectsSection/ProjectsSection";
import SkillsSection from "@components/Home/SkillsSection/SkillsSection";
import Nav from "@components/Nav/Nav";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Head>
				<title>Gabriel Gusso | Portfólio</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<div
				style={{
					height: "100dvh",
				}}
			>
				<Nav />
				<HomeHero />
			</div>
			<SkillsSection />
			<ProjectsSection />
			<AboutSection />
			<Footer />
		</>
	);
}
