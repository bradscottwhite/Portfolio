import { motion, Variants } from 'framer-motion';

import tw from 'tailwind-styled-components';

import Tooltip from '@mui/material/Tooltip';

const LinkBase = tw(motion.div)`
	drop-shadow-xl
	py-2
`;

const IconLink = tw.a`
	text-dark-red
	dark:text-hunter-green2
	hover:text-rosewood
	dark:hover:text-white
	lg:px-8
	hover:cursor-pointer
`;

const LinkTitle = tw.span`
	text-lg
	pl-4
`;

const sx = {
	fontSize: '2rem',
	/*'&:hover': { fontSize: '4rem' }*/
};

const variants: Variants = {
	closed: { opacity: 0 },
	open: { opacity: 1 }
};

export const MobileLink = ({
	MuiIcon,
	title,
	href
}: {
	MuiIcon: any;
	title: string;
	href: string;
}) => {
	const linkProps = href.includes('#') ? {} : {
		target: '_blank',
		rel: 'noreferrer'
	};

	return (
		<LinkBase
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
					<LinkTitle>{title}</LinkTitle>
				</IconLink>
			</Tooltip>
		</LinkBase>
	);
};
