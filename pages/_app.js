import "../styles/reset.css";
import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32.png" />
				<meta
					name="description"
					content="Desenvolvedor front-end localizado em Curitiba, PR."
					key="desc"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta property="og:title" content="Gabriel Gusso | Portfólio" />
				<meta
					property="og:description"
					content="Desenvolvedor front-end localizado em Curitiba, PR."
				/>
				<meta property="og:image" content="https://i.ibb.co/GcrGZYX/og-home-img.png" />
				{/* <!-- Google tag (gtag.js) --> */}
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-W6DL9XBDQS"
				></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
					window.dataLayer = window.dataLayer || [];
					  function gtag(){dataLayer.push(arguments);}
					  gtag('js', new Date());
					
					  gtag('config', 'G-W6DL9XBDQS');

					`,
					}}
				></script>
			</Head>

			<Component {...pageProps} />
		</>
	);
}
