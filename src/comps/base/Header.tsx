import { Dispatch, SetStateAction } from 'react';

import { motion, useCycle, AnimatePresence, Variants } from 'framer-motion';

import tw from 'tailwind-styled-components';

import { Icons } from './Icons';
import { Toggle } from './Toggle';
import { ModeSwitcher } from './ModeSwitcher';
import { MobileIcons } from './MobileIcons';

const isMobile = window.innerWidth <= 1024;

export const Header = ({
	darkMode, setDarkMode
}: {
	darkMode: boolean;
	setDarkMode: Dispatch<SetStateAction<boolean>>;
}) => {
	const HeaderBase = tw.header`
		bg-white
		dark:bg-wintergreen-dream
		z-20
		sticky
		top-0
	`;

	const HeaderWrapper = tw.div`
		mx-auto
		lg:px-20
		px-8
		w-screen
	`;

	const HeaderNav = tw.div`
		relative
		flex
		h-20
		items-center
		justify-between
	`;

	const TitleBase = tw.div`
		absolute
		inset-y-0
		left-0
		flex
		items-center
	`;

	const IconBase = tw(motion.div)`
		flex
		space-x-4
	`;

	const NavBase = tw.div`
		absolute
		inset-y-0
		right-0
		flex
		items-center
		pr-0
		md:pr-2
	`;

	const Title = tw(motion.h1)`
		text-dark-red
		dark:text-hunter-green2
		font-bold
		lg:text-2xl
		md:text-lg
		text-md
	`;

	const iconsVariants: Variants = !isMobile ? { 
		closed: {
			x: '100vw',
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

	const titleVariants: Variants = !isMobile ? {
		closed: {
			x: '-100vw',
			opacity: 0,
			transition: { duration: 1 }
		}, open: {
			x: 0,
			opacity: 1,
			transition: { duration: 1 }
		}
	} : {};

	const [ show, cycleShow ] = useCycle<boolean>(false, true);

	return (
		<>
			<HeaderBase>
				<HeaderWrapper>
					<HeaderNav>
						<TitleBase>
							<AnimatePresence>
								{!show && !isMobile ? (
									<Title
										key='title1'
										initial='closed'
										animate='open'
										exit='closed'
										variants={titleVariants}
									>
										Brad White / Software Development Engineer
									</Title>
								) : (
									<Title
										key='title2'
										initial='closed'
										animate='open'
										exit='closed'
										variants={titleVariants}
									>
										BW / SDE
									</Title>
								)}
							</AnimatePresence>
						</TitleBase>

						<NavBase>
							<AnimatePresence>
								{show && !isMobile && (
									<IconBase
										key='icons'
										initial='closed'
										animate='open'
										exit='closed'
										variants={iconsVariants}
									>
										<Icons/>
									</IconBase>
								)}
							</AnimatePresence>
							<IconBase>
								<Toggle show={show} cycleShow={cycleShow}/>
							</IconBase>
							<IconBase>
								<ModeSwitcher darkMode={darkMode} setDarkMode={setDarkMode}/>
							</IconBase>
						</NavBase>
					</HeaderNav>
				</HeaderWrapper>
			</HeaderBase>

			<AnimatePresence>
				{show && isMobile && (
					<MobileIcons/>
				)}
			</AnimatePresence>
		</>
	);
};
