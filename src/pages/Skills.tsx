import tw from 'tailwind-styled-components';

import { motion, Variants } from 'framer-motion';

import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

import { SkillIcons } from '../comps/skills/SkillIcons';

import { DarkModeProps } from '../servs/darkModeProps';

const isMobile = window.innerWidth <= 648;

const textProps: Variants = !isMobile ? {
	initial: {
		opacity: 0,
		backdropFilter: 'blur(5px)',
		x: '-100vw',
		transition: { duration: 0.5 }
	},
	whileInView: {
		opacity: 1,
		backdropFilter: 'blur(0px)',
		x: 0,
		transition: { duration: 0.5 }
	}
} : {};

const SkillsBase = tw.div`
	bg-jet

	pb-20
`;

const SkillsHeader = tw(motion.h3)`
	pl-16
	lg:pl-28
	pr-10
	py-10
	text-white
	font-bold
	text-2xl
	lg:text-3xl
	drop-shadow-xl
`;

/*const SkillInfo = tw(motion.p)`
	px-10
	lg:px-40
	py-10
	text-white
	font-bold
	text-sm
	lg:text-lg
	drop-shadow-xl
	w-screen
`;*/

export const Skills = ({ darkMode, setDarkMode }: DarkModeProps) => (
	<SkillsBase id='skills'>
		<SkillsHeader {...textProps}>
			<HomeRepairServiceIcon className='mr-4 mb-1'/>
			Skills
		</SkillsHeader>
		
		<SkillIcons/>

		{/*<SkillInfo {...textProps}>
			These are a sample of the current programming technologies I have worked with...  I’m currently focusing on learning and building projects with React.js, Tailwind css, Framer Motion and AWS.
			</SkillInfo>*/}
	</SkillsBase>
);
