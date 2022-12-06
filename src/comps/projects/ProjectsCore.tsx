import tw from 'tailwind-styled-components';

import { motion, Variants } from 'framer-motion';

import { projects, ProjectProps } from '../../servs/projects';
import { ProjectPrim } from './ProjectPrim';

const isMobile = window.innerWidth <= 648;

const projectsVariants: Variants = !isMobile ? {
	closed: {
		x: '-100vh',
		transition: {
			duration: 1,
			staggerChildren: 0.2,
			staggerDirection: -1
		}
	}, open: {
		x: 0,
		transition: {
			duration: 1,
			staggerChildren: 0.2,
			staggerDirection: 1,
			delayChildren: 0.2
		}
	}
} : {};

const ProjectsBase = tw(motion.div)`
	pl-10
	pr-4
	lg:px-24
	pt-2
	pb-20
	gap-20
	grid
	grid-rows-*
	lg:grid-cols-2
`;

export const ProjectsCore = () => (
	<ProjectsBase
		initial='closed'
		whileInView='open'
		variants={projectsVariants}
	>
		{projects.map((info: ProjectProps) => (
			<ProjectPrim
				{...info}
			/>
		))}
	</ProjectsBase>
);
