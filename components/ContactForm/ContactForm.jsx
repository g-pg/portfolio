import React, { useEffect, useState } from "react";
import styles from "./ContactForm.module.css";
export default function ContactForm() {
	const [fields, setFields] = useState({ name: "", email: "", message: "" });

	const [sent, setSent] = useState(false);
	function handleChange(e) {
		setFields((prevFields) => {
			return { ...prevFields, [e.target.id]: e.target.value };
		});
	}

	function encode(data) {
		return Object.keys(data)
			.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
			.join("&");
	}

	function handleSubmit(e) {
		e.preventDefault();
		const myForm = e.target;
		const formData = new FormData(myForm);

		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...fields }),
		})
			.then(() => setSent(true))
			.catch((error) => alert(error));
	}

	useEffect(() => {
		// console.log(fields);
	}, [fields]);

	return (
		<>
			<form
				name="contact"
				method="POST"
				className={styles.formWrapper}
				onSubmit={(e) => handleSubmit(e)}
				action="/?success=true"
				data-netlify="true"
			>
				<input type="hidden" name="form-name" value="contact" />

				<input
					type="text"
					placeholder="Nome"
					id="name"
					required
					className={styles.name}
					value={fields.name}
					onChange={handleChange}
				></input>
				<input
					type="email"
					placeholder="E-mail"
					id="email"
					required
					value={fields.email}
					className={styles.email}
					onChange={handleChange}
				></input>
				<textarea
					id="message"
					placeholder="Mensagem"
					className={styles.message}
					value={fields.message}
					onChange={handleChange}
				></textarea>
				<input type="submit" value="Enviar"></input>
			</form>

			{sent && <p> Obrigado por me enviar a mensagem! </p>}
		</>
	);
}
