import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../components/new-greeting"));
const OurProject = dynamic(() => import("../components/OurProject"));
const OurDetails = dynamic(() => import("../components/MoreDetails"));
// const OurService = dynamic(() => import("../components/OurService"));
const OurOffer = dynamic(() => import("../components/OurOffer"));
const WhatWeDo = dynamic(() => import("../components/WeDo"));
// const IntellitechlabNavbar = dynamic(() => import("../components/new-navigation"));
// const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
import ScrollToTop from "react-scroll-to-top";


import { openSource } from "../portfolio";
import SEO from "../components/SEO";
import { Icon } from "@iconify/react";


// import { OurSkill } from "../components/OurSkill";
import { Box } from "@mui/material";


export default function Home({ githubProfileData }) {

	const grab = "radial-gradient(circle, #01040b, #0b1317, #121d1f, #192725, #243029)"
	return (
		<div>
			<SEO />
			<ScrollToTop
				smooth
				component={
					<Icon icon='akar-icons:circle-chevron-up-fill'
						fontSize={26}>

					</Icon>}
			/>

			<Navigation />
			<Greetings />

			<Box sx={{
				py: 12,
				backgroundColor: "rgb(255,255,255)",
				background:
					"linear-gradient(155deg, rgba(255,255,255,1) 5%, rgba(232,232,232,1) 100%)",
			}}>
				{/* <OurSkill /> */}
				{/* <OurService /> */}
			</Box>
			<WhatWeDo />
			<Box sx={{
				py: 12,
				backgroundColor: 'white',
			}}>
				<OurOffer />
			</Box>

			<Box sx={{
				py: 12,
				backgroundColor: "rgb(255,255,255)",
				background:
					"linear-gradient(155deg, rgba(255,255,255,1) 5%, rgba(232,232,232,1) 100%)",

			}}>
				<OurProject />
			</Box>
			<Box>
				<OurDetails />
			</Box>


			{/* <Box sx={{
				width: '100%',
				// backgroundImage: grab,
				backgroundColor: "#343a40",
				height: 500,
			}}>
				<NewFooter />
			</Box> */}
			{/* <Skills />
			<Proficiency />
			<Education />
			<Experience /> */}
			{/* <Feedbacks /> */}
			{/* <Projects /> */}
			{/* <GithubProfileCard prof={githubProfileData} /> */}
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
