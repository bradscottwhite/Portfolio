import tw from 'tailwind-styled-components';

import { motion } from 'framer-motion';

const Links = tw.div`
	flow-root
	w-full
	rounded-b-md
`;

const Link = tw(motion.a)<{
	first?: boolean;
}>`
	${props => props.first ? `
		float-left
		ml-10
		md:ml-14
		lg:ml-24
	` : `
		float-right
		mr-10
		md:mr-14
		lg:mr-24
	`}
	text-center
	bg-white
	dark:bg-dark-red
	rounded-md
	mb-0
	md:mb-10
	/*lg:mb-0*/
	mt-2
	lg:mt-4
	px-4
	py-2
	hover:scale-105
	transition
	ease-in-out
	duration-300
	delay-150
	hover:bg-hunter-green2
	dark:hover:bg-rosewood
	drop-shadow-xl
	text-sm
	lg:text-md
`;

export const ProjectLinks = ({
	url, github
}: {
	url: string;
	github: string;
}) => (
	<Links>
		<Link
			first
			href={url}
			target='_blank'
			rel='noreferrer'
			whileTap={{ scale: 0.9 }}
		>
			Live site
		</Link>

		<Link
			href={github}
			target='_blank'
			rel='noreferrer'
			whileTap={{ scale: 0.9 }}
		>
			Source code
		</Link>
	</Links>
);
