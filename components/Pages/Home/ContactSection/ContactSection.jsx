import ContactForm from "@components/ContactForm/ContactForm";
import classNames from "classnames";
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
				Você pode me mandar uma mensagem pelo formulário abaixo, ou um e-mail para{" "}
				<Link href="mailto:gabrielpgusso@gmail.com">gabrielpgusso@gmail.com</Link>.
				<br />
				<br />
				De qualquer maneira vou ficar feliz em ouvir o que você tem a dizer!
			</PrimaryText>
			<div className={styles.formWrapper}>
				<ContactForm />
			</div>
		</HomeSectionLayout>
	);
}
