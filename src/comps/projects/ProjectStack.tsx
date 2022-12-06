import tw from 'tailwind-styled-components';

import { motion } from 'framer-motion';

import { StackProps } from '../../servs/projects'

import Tooltip from '@mui/material/Tooltip';

const isMobile = window.innerWidth <= 648;

const StackIcons = tw.div`
	flex	
	float-right
	pl-0
	pr-4
	lg:pl-2
	lg:pr-6
	py-3
	lg:py-2
`;

export const ProjectStack = ({ stack }: { stack: StackProps[] }) => (
	<StackIcons>
		{stack.map(({ Svg, title }: StackProps) => (
			<motion.div
				className='lg:p-3 md:p-1.5 p-1'
				whileHover={{ scale: 1.1 }}
			>
				<Tooltip
					title={title}
					arrow
					className='flex-none hover:cursor-pointer'
				>
					<div>
						<Svg
							fill='#FFFFFF'
							width={isMobile ? 25 : 35}
							height={isMobile ? 25 : 35}
						/>
					</div>
				</Tooltip>
			</motion.div>
		))}
	</StackIcons>
);
