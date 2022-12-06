import tw from 'tailwind-styled-components';

import { motion, Variants } from 'framer-motion';

import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { ContactForm } from '../comps/contact/ContactForm';

const isMobile = window.innerWidth <= 648;

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
}: {};

const contactVariants: Variants = !isMobile ? {
	closed: {
		x: '-100vw',
		transition: {
			duration: 1,
			staggerChildren: 0.2,
			staggerDirection: -1
		}
	}, open: {
		x: 0,
		transition: {
			duration: 1,
			staggerChildren: 0.2,
			staggerDirection: 1,
			delayChildren: 0.2
		}
	}
} : {};

const ContactCore = tw.div`
	bg-jet
`;

const ContactHeader = tw(motion.h3)`
	pl-16
	lg:pl-28
	pr-10
	py-10
	text-dark-red
	dark:text-hunter-green2
	font-bold
	text-2xl
	lg:text-3xl
	drop-shadow-xl
`;

const ContactBase = tw(motion.div)`
	flex
	grid
	lg:grid-cols-2
	w-screen
`;

const Sidebars = tw.div`
	grid
	grid-rows-3
	h-3/4
`;

const Sidebar = tw.h4`
	text-sm
	lg:text-lg
	drop-shadow-xl
	text-dark-jungle-green
	dark:text-wintergreen-dream
	px-4
	lg:px-8
	py-4
	bg-hunter-green
	dark:bg-rosewood
	shadow-xl
	width-1/4
	h-16
	rounded-md
	lg:mx-36
	mx-10
	my-10
	lg:my-0
`;

export const Contact = () => (
	<ContactCore id='contact'>
		<ContactHeader {...textProps}>
			<MailIcon className='mr-4 mb-1'/>
			Contact
		</ContactHeader>

		<ContactBase
			initial='closed'
			whileInView='open'
			variants={contactVariants}
		>
			<ContactForm/>

			<Sidebars>
				<Sidebar>
					<MailIcon className='mr-4 mb-1'/>
					bradscottwhite@gmail.com
				</Sidebar>
				
				<Sidebar>
					<a
						href='https://www.github.com/bradscottwhite/'
						target='_blank'
						rel='noreferrer'
					>
						<GitHubIcon className='mr-4 mb-1'/>
						bradscottwhite
					</a>
				</Sidebar>
				
				<Sidebar>
					<a
						href='https://linkedin.com/in/bradley-scott-white/'
						target='_blank'
						rel='noreferrer'
					>
						<LinkedInIcon className='mr-4 mb-1'/>
						Brad White
					</a>
				</Sidebar>
			</Sidebars>
		</ContactBase>
	</ContactCore>
);
