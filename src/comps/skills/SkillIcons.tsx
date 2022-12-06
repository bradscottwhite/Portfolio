import { motion, Variants } from 'framer-motion';

import tw from 'tailwind-styled-components';

import { tools } from '../../servs/tools';
import { SkillIcon } from './SkillIcon';

const isMobile = window.innerWidth <= 640;

const IconBase = tw.div`
	flex
	gap-10
	w-screen
`;

const ScrollBtn = tw(motion.a)<{ left?: string; }>`
	py-6
	lg:py-12
	hover:cursor-pointer
	text-dark-red
	dark:text-hunter-green2
	text-2xl
	lg:text-4xl
	font-extrabold
	transition
	ease-in-out
	delay-150
	duration-300
	hover:text-rosewood
	dark:hover:text-white
	h-full
	${props => props.left ? 'ml-6' : 'mr-8'}
`;

const IconContainer = tw(motion.div)`
	inline-block
	whitespace-nowrap
	overflow-x-auto
	overflow-y-hidden
	align-middle
	w-full
`;

const iconsProps: Variants = !isMobile ? {
	initial: {
		x: '-100vh',
		transition: {
			duration: 1,
			staggerChildren: 0.2,
			staggerDirection: -1
		}
	},
	whileInView: {
		x: 0,
		transition: {
			duration: 1,
			staggerChildren: 0.2,
			staggerDirection: 1,
			delayChildren: 0.2
		}
	}
} : {};

const scroll = (dir: number) => {
	const cont: HTMLElement | null = document.querySelector('#iconContainer') || null;
	if (cont !== null) {
		let pos = cont.offsetWidth / 2 * dir;
		cont.scrollLeft += pos;
	}
};

export const SkillIcons = () => (
	<IconBase>
		<ScrollBtn
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			onClick={() => scroll(-1)}
			left='true'
		>
			&#10094;
		</ScrollBtn>
		<IconContainer
			id='iconContainer'
			{...iconsProps}
		>
			{tools.map(tool => (
				<SkillIcon
					tool={tool}
				/>
			))}
		</IconContainer>
		<ScrollBtn
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			onClick={() => scroll(1)}
		>
			&#10095;
		</ScrollBtn>
	</IconBase>
);
