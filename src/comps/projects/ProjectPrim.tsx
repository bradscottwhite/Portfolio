import tw from 'tailwind-styled-components';

import { ProjectProps } from '../../servs/projects'

import { ProjectStack } from './ProjectStack';
import { ProjectLinks } from './ProjectLinks';

const ProjectBase = tw.div`
	bg-dark-red
	dark:bg-jet
	shadow-xl
	rounded-md
`;

const ProjectImg = tw.img`
	w-full
	h-1/2
	lg:h-3/5
	rounded-t-md
`;

const ProjectHeader = tw.div`
	flow-root
`;

const ProjectTitle = tw.h3`
	float-left
	text-hunter-green
	dark:text-wintergreen-dream
	text-md
	lg:text-lg
	drop-shadow-xl
	pl-4
	lg:pl-6
	pr-2
	lg:pr-4
	lg:pl-8
	py-4
	md:py-6
`;

const ProjectDesc = tw.p`
	text-white
	drop-shadow-xl
	py-2
	lg:py-4
	px-4
	lg:px-6
	text-sm
	lg:text-md
`;

export const ProjectPrim = ({
	title, url, img, desc, github, stack
}: ProjectProps) => (
	<ProjectBase>
		<ProjectImg
			src={img}
			alt={title}
			key={title}
		/>
		
		<ProjectHeader>
			<ProjectTitle>{title}</ProjectTitle>

			<ProjectStack stack={stack}/>
		</ProjectHeader>
		
		<ProjectDesc>{desc}</ProjectDesc>			
		<ProjectLinks url={url} github={github}/>
	</ProjectBase>
);
