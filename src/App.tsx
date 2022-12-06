import { useState, useEffect, FC } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Header } from './comps/base/Header';
import { Footer } from './comps/base/Footer';

import { pages } from './servs/pages';
import { DarkModeProps } from './servs/darkModeProps';

export const App = () => {
	const [ darkMode, setDarkMode ] = useState<boolean>(false)

	useEffect(() => {
		// On page load or when changing themes, best to add inline in `head` to avoid FOUC
		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
			setDarkMode(true)
		else
			setDarkMode(false)

		// Whenever the user explicitly chooses light mode
		//localStorage.theme = 'light'

		// Whenever the user explicitly chooses dark mode
		//localStorage.theme = 'dark'

		// Whenever the user explicitly chooses to respect the OS preference
		//localStorage.removeItem('theme')
	}, []);

	return (
		<div className={darkMode ? 'dark' : ''}>
			<AnimatePresence>
				<Header darkMode={darkMode} setDarkMode={setDarkMode}/>
				{/* Body: */}

				{/* Need to get scrolling links to work!!! */}

				<div>
					{pages.map((El: FC<DarkModeProps>) => (
						<El {...{ darkMode, setDarkMode }} />
					))}
				</div>
				
				<Footer/>
			</AnimatePresence>
		</div>
	);
};
