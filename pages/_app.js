import "../styles/reset.css";
import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				{/* META TAGS */}
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
			</Head>

			{/* GTAG */}
			<Script
				strategy="afterInteractive"
				src="https://www.googletagmanager.com/gtag/js?id=G-W6DL9XBDQS"
			></Script>
			<Script id="google-analytics" strategy="afterInteractive">
				{`

					window.dataLayer = window.dataLayer || [];
					  function gtag(){dataLayer.push(arguments);}
					  gtag('js', new Date());
					
					  gtag('config', 'G-W6DL9XBDQS');

				`}
			</Script>

			<Component {...pageProps} />
		</>
	);
}
