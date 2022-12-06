import { Dispatch, SetStateAction } from 'react';

import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';

import { Icon } from './Icon';

export const ModeSwitcher = ({
	darkMode, setDarkMode
}: {
	darkMode: boolean;
	setDarkMode: Dispatch<SetStateAction<boolean>>;
}) => (
	<div onClick={() => {
		localStorage.theme = !darkMode ? 'dark' : 'light';
		setDarkMode(!darkMode);
	}}>
		{darkMode ? (
			<Icon
				MuiIcon={LightModeIcon}
				title='Switch to dark mode'
			/>
		) : (
			<Icon
				MuiIcon={NightlightIcon}
				title='Switch to light mode'
			/>
		)}
	</div>
);
