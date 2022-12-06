import tw from 'tailwind-styled-components';

import { motion, Variants } from 'framer-motion';

import CodeIcon from '@mui/icons-material/Code';

import { DarkModeProps } from '../servs/darkModeProps';

import { ProjectsCore } from '../comps/projects/ProjectsCore';

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
	},
} : {};

const ProjectsBase = tw.div`
	bg-rosewood
	dark:bg-hunter-green2
`

const ProjectsHeader = tw(motion.h3)`
	pl-16
	lg:pl-28
	pr-10
	py-10
	text-white
	dark:text-rosewood
	font-bold
	text-2xl
	lg:text-3xl
	drop-shadow-xl
`

export const Projects = ({ darkMode, setDarkMode }: DarkModeProps) => (
	<ProjectsBase id='projects'>
		<ProjectsHeader {...textProps}>
			<CodeIcon className='mr-4 mb-1'/>
			Projects
		</ProjectsHeader>
		<ProjectsCore/>
	</ProjectsBase>
);
