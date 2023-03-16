import React from "react";
import styles from "./ContactForm.module.css";
export default function ContactForm() {
	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<form
			name="contact"
			method="POST"
			className={styles.formWrapper}
			onSubmit={(e) => handleSubmit(e)}
			action="/?success=true"
			data-netlify="true"
		>
			<input type="hidden" name="contact" value="contact" />

			<input
				type="text"
				placeholder="Nome"
				id="name"
				required
				className={styles.name}
			></input>
			<input
				type="email"
				placeholder="E-mail"
				id="email"
				required
				className={styles.email}
			></input>
			<textarea id="message" placeholder="Mensagem" className={styles.message}></textarea>
			<input type="submit" value="Enviar"></input>
		</form>
	);
}
