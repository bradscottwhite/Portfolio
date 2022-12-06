import { Dispatch, SetStateAction } from 'react';

export interface DarkModeProps {
	darkMode?: boolean;
	setDarkMode?: Dispatch<SetStateAction<boolean>>;
}
