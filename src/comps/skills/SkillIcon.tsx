import { motion } from 'framer-motion';

import Tooltip from '@mui/material/Tooltip';

import { StackProps } from '../../servs/projects';

const isMobile = window.innerWidth <= 648;

export const SkillIcon = ({ tool: { Svg, title} }: {
	tool: StackProps;
}) => (
	<motion.div
		className='inline-block m-4'
		whileHover={{ scale: 1.1 }}
	>
		<Tooltip
			title={title}
			arrow
			className='flex-none hover:cursor-pointer'
		>
			<div>
				<Svg
					fill='#406049'
					width={isMobile ? 60 : 100}
					height={isMobile ? 60 : 100}
				/>
			</div>
		</Tooltip>
	</motion.div>
);
