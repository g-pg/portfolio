import React, { useState } from "react";
import styles from "./ContactForm.module.css";
export default function ContactForm() {
	const [fields, setFields] = useState({ name: "", email: "", message: "" });

	const [submitMessage, setSubmitMessage] = useState("");

	function handleChange(e) {
		setFields((prevFields) => {
			return { ...prevFields, [e.target.name]: e.target.value };
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		const myForm = e.target;
		const formData = new FormData(myForm);

		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(formData).toString(),
		})
			.then(() => setSubmitMessage("Obrigado! Vou responder assim que possível."))
			.catch((error) => {
				console.log(error);
				setSubmitMessage(
					"Oops, alguma coisa deu errado. Tente novamente em alguns minutos ou me mande um e-mail!"
				);
			});

		setFields({ name: "", email: "", message: "" });
	}

	return (
		<>
			<form
				name="contact"
				method="POST"
				className={styles.formWrapper}
				onSubmit={(e) => handleSubmit(e)}
				// action="/?success=true"
				data-netlify="true"
				data-netlify-recaptcha="true"
			>
				<input type="hidden" name="form-name" value="contact" />
				<input
					type="text"
					placeholder="Nome"
					name="name"
					required
					className={styles.name}
					value={fields.name}
					onChange={handleChange}
				></input>
				<input
					type="email"
					placeholder="E-mail"
					name="email"
					required
					value={fields.email}
					className={styles.email}
					onChange={handleChange}
				></input>
				<textarea
					name="message"
					placeholder="Mensagem"
					className={styles.message}
					value={fields.message}
					onChange={handleChange}
					required
				></textarea>
				{!submitMessage ? (
					<input type="submit" value="Enviar"></input>
				) : (
					<p className={styles.sentMessage}>{submitMessage} </p>
				)}
				{!submitMessage && <div data-netlify-recaptcha="true"></div>}
				{/* {submitMessage && <p className={styles.sentMessage}>{submitMessage} </p>} */}
			</form>
		</>
	);
}
