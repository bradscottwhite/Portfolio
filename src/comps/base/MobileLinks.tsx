import { MobileLink } from './MobileLink';

// Icons:
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import MailIcon from '@mui/icons-material/Mail';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

interface IconProps {
	title: string;
	href: string;
	MuiIcon: any;
}

const mobileIcons: IconProps[] = [
	{
		title: 'Skills',
		href: '#skills',
		MuiIcon: HomeRepairServiceIcon
	}, {
		title: 'Projects',
		href: '#projects',
		MuiIcon: CodeIcon
	}, {
		title: 'GitHub',
		href: 'https://www.github.com/bradscottwhite/',
		MuiIcon: GitHubIcon
	}, {
		title: 'LinkedIn',
		href: 'https://linkedin.com/in/bradley-scott-white/',
		MuiIcon: LinkedInIcon
	}, {
		title: 'Resume',
		href: 'https://www.linkedin.com/in/bradley-scott-white/overlay/1635506636746/single-media-viewer/',
		MuiIcon: ArticleIcon
	}, {
		title: 'Contact',
		href: '#contact',
		MuiIcon: MailIcon
	}
];

export const MobileLinks = () => (
	<>
		{mobileIcons.map((mobileIcon: IconProps) => (
			<MobileLink {...mobileIcon} />
		))}
	</>
);
