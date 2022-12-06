import { motion, Variants } from 'framer-motion';

import tw from 'tailwind-styled-components';

import { Icons } from './Icons';

const isMobile = window.innerWidth <= 640;

export const Footer = () => {
	const FooterBase = tw.header`
		bg-white
		dark:bg-wintergreen-dream
		w-screen
		h-40
		flex
		flex-col
	`;

	const FooterWrapper = tw.div`
		mx-auto
		px-30
		pt-4
		flex
		items-center
		justify-between
	`;

	const NavBase = tw.div`
		flex
		items-center
	`;

	const IconBase = tw(motion.div)`
		flex
		space-x-4
	`;

	const FooterText = tw(motion.h6)`
		text-center
		pt-6
		text-sm
		text-rosewood
		dark:text-hunter-green2
	`;

	const iconsVariants: Variants = !isMobile ? {
		initial: {
			x: '-100vh',
			opacity: 0,
			transition: {
				duration: 1,
				staggerChildren: 0.2,
				staggerDirection: 1
			}
		},
		whileInView: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 1,
				staggerChildren: 0.2,
				staggerDirection: -1,
				delayChildren: 0.2
			}
		}
	} : {};

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

	return (
		<FooterBase>
			<FooterWrapper>
				<NavBase>
					<IconBase
						key='footer-icons'
						{...iconsVariants}
					>
						<Icons/>
					</IconBase>
				</NavBase>
			</FooterWrapper>
			
			<FooterText {...textProps}>
				Brad White / SDE {new Date().getFullYear()}
			</FooterText>
		</FooterBase>
	);
};
