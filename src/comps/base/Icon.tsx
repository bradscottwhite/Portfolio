import tw from 'tailwind-styled-components';

import { motion, Variants } from 'framer-motion';

import Tooltip from '@mui/material/Tooltip';

const isMobile = window.innerWidth <= 768;

const AnimateIcon = tw(motion.div)`
	drop-shadow-xl
	flex-1
`;

const IconLink = tw.a`
	text-dark-red
	dark:text-hunter-green2
	hover:text-rosewood
	dark:hover:text-white
	py-6
	px-1
	lg:px-8
	hover:cursor-pointer
`;

const sx = {
	fontSize: !isMobile ? '3rem' : '2rem',
	/*'&:hover': { fontSize: '4rem' }*/
};

const variants: Variants = {
	closed: { opacity: 0 },
	open: { opacity: 1 }
};

export const Icon = ({
	MuiIcon,
	title,
	href
}: {
	MuiIcon: any;
	title: string;
	href?: string;
}) => {
	const linkProps = href && href.includes('#') ? {} : {
		target: '_blank',
		rel: 'noreferrer'
	};

	return (
		<AnimateIcon
			variants={variants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
		>
			<Tooltip
				title={title}
				placement='bottom'
				arrow
			>
				<IconLink
					key={href}
					href={href}
					{...linkProps}
				>
				<MuiIcon sx={sx} />
			</IconLink>
			</Tooltip>
		</AnimateIcon>
	);
};
