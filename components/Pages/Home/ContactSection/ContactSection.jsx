import ContactForm from "@components/ContactForm/ContactForm";
import classNames from "classnames";
import React from "react";
import HomeSectionLayout from "../HomeSectionLayout/HomeSectionLayout";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
	return (
		<HomeSectionLayout
			sectionId={"contact"}
			sectionTitle={"Contato"}
			sectionWrapper={styles.sectionWrapper}
		>
			{/* <div className={styles.formWrapper}> */}
			<ContactForm />
			{/* </div> */}
		</HomeSectionLayout>
	);
}
