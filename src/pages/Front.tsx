import tw from 'tailwind-styled-components';

import { DarkModeProps } from '../servs/darkModeProps';

import { motion, Variants } from 'framer-motion';

import bgSrc from '../imgs/mtn-bg.png';

const isMobile = window.innerWidth <= 648;

const greetingProps: Variants = !isMobile ? {
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

const FrontBase = tw.div`
	h-[calc(100vh-5rem)]
	z-0
	bg-white
	dark:bg-wintergreen-dream
`;

const BgImg = tw.img`
	bg-cover
	z-1
	absolute
	bottom-0
	lg:bottom-[-5rem]
	left-0
	w-screen
	/*dark:invert*/
`;

const GreetingBase = tw.div`
	flex
	grid
	items-center
	h-[calc(100vh-5rem)]
	pb-[10rem]
`;

const GreetingCore = tw.div`
	z-10
	px-10
	lg:pl-40
	lg:pr-5
`;

const Greeting1 = tw(motion.h1)`
	text-rosewood
	dark:text-white
	font-bold
	text-2xl
	lg:text-4xl
	drop-shadow-xl
`;

const Greeting2 = tw(motion.h2)`
	text-dark-jungle-green
	dark:text-rosewood
	font-extrabold
	text-4xl
	lg:text-6xl
	drop-shadow-xl
	pt-2
	lg:pt-4
`;

const Greeting3 = tw(motion.h3)`
	text-dark-red
	dark:text-hunter-green2
	font-bold
	text-md
	lg:text-2xl
	drop-shadow-xl
	py-4
	lg:py-6
`;

export const Front = ({ darkMode }: DarkModeProps) => (
	<FrontBase>
		<BgImg
			src={bgSrc}
			alt='bg image of mountains'
		/>
		<GreetingBase id='front'>
			<GreetingCore>
				<Greeting1 {...greetingProps}>
					Howdy I'm
				</Greeting1>
				<Greeting2 {...greetingProps}>
					Brad White.
				</Greeting2>
				<Greeting3 {...greetingProps}>
					I'm a software engineer building creative and functional apps for the wild web. 
				</Greeting3>
			</GreetingCore>
		</GreetingBase>
	</FrontBase>
);
