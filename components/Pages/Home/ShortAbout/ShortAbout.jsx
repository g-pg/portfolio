import React from "react";
import HomeSectionLayout, { PrimaryText } from "../HomeSectionLayout/HomeSectionLayout";
import styles from "./ShortAbout.module.css";
export default function ShortAbout() {
	const color = { color: "var(--cl-main-dark)" };
	return (
		// <>
		<HomeSectionLayout sectionWrapper={styles.sectionWrapper}>
			<PrimaryText style={color}>
				{/* <span style={{textAlign: "center"}> */}
				<span
					style={{
						fontWeight: "700",
						fontSize: "2rem",
						fontFamily: "var(--roboto)",
					}}
				>
					Olá!
				</span>
				<br />
				<br /> Meu nome é Gabriel. <br />
			</PrimaryText>
			<PrimaryText style={color}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eius corrupti
				voluptatum. Natus velit non totam iusto ipsam dolorem. Illo, quisquam labore
				alias nostrum corrupti nemo esse aspernatur distinctio eos.
			</PrimaryText>
			<PrimaryText style={color}>
				Modi culpa tenetur quam possimus dolorem et aut nisi, placeat delectus sed
				accusamus voluptate voluptates veniam similique eum optio magni ipsa eligendi
				itaque molestias incidunt. Obcaecati doloribus atque minus, nihil optio enim.
			</PrimaryText>

			<br />
		</HomeSectionLayout>
		// </>
	);
}
