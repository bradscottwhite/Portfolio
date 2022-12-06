import { motion, Variants } from 'framer-motion';
import tw from 'tailwind-styled-components';

export const Page = tw(motion.div)``;

export const pageProps: Variants = {
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
};
