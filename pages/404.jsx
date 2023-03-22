import Link from "next/link";

export default function PageNotFound() {
	const divStyle = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100vh",
		textAlign: "center",
	};

	return (
		<div style={divStyle} className={"container"}>
			<div>
				<h1 style={{ marginBottom: "2rem" }}>Oops! Essa página não existe.</h1>

				<Link href="/" className={"primary-link"} style={{ marginTop: "2rem" }}>
					{"Voltar ao início"}
				</Link>
			</div>
		</div>
	);
}
