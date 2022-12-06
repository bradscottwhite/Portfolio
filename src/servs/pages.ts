import { FC } from 'react';

import { DarkModeProps } from './darkModeProps';

import { Front } from '../pages/Front';
import { Skills } from '../pages/Skills';
import { Projects } from '../pages/Projects';
import { Contact } from '../pages/Contact';

export const pages: FC<DarkModeProps>[] = [
	Front,
	Skills,
	Projects,
	Contact
];
