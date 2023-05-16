import ContactForm from "@components/ContactForm/ContactForm";
import Link from "next/link";
import React from "react";
import HomeSectionLayout, { PrimaryText } from "../HomeSectionLayout/HomeSectionLayout";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
	return (
		<HomeSectionLayout
			sectionId={"contact"}
			sectionTitle={"Contato"}
			sectionWrapper={styles.sectionWrapper}
		>
			<PrimaryText style={{ textAlign: "center" }}>
				Entre em contato! <br />
				<br />
				Mande uma mensagem por aqui mesmo ou um e-mail para{" "}
				<Link href="mailto:gabrielpgusso@gmail.com">gabrielpgusso@gmail.com</Link>.
				<br />
				<br />
			</PrimaryText>
			<div className={styles.formWrapper}>
				<ContactForm />
			</div>
		</HomeSectionLayout>
	);
}
