import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

import { Icon } from './Icon';

export const Toggle = ({
	show, cycleShow
}: {
	show: boolean,
	cycleShow: any
}) => (
	<div className='pl-2.5 md:pl-0' onClick={cycleShow}>
		{!show ? (
			<Icon
				title='Menu'
				MuiIcon={MenuIcon}
			/>
		) : (
			<Icon
				title='Menu'
				MuiIcon={ClearIcon}
			/>
		)}
	</div>
);
