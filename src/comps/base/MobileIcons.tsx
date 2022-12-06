import tw from 'tailwind-styled-components';

import { MobileLinks } from './MobileLinks';

const IconBase = tw.div`
	flex
	top-20
	left-0
	fixed
	w-screen
	bg-white
	dark:bg-wintergreen-dream
	z-20
	pt-0
	pb-2
	items-center
	justify-center
	shadow-xl
`;

const LinksBase = tw.div`
	flex
	grid
	grid-rows-*
`;

export const MobileIcons = () => (
	<IconBase>
		<LinksBase>
			<MobileLinks/>
		</LinksBase>
	</IconBase>
);
