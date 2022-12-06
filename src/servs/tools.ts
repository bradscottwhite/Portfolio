import { StackProps } from './projects';

// Imgs for tools: (from icons8 and devicon!!!)
import { AwsIcon } from '../svgIcons/AwsIcon';
import { ReactIcon } from '../svgIcons/ReactIcon';
import { NgIcon } from '../svgIcons/NgIcon';
import { GitIcon } from '../svgIcons/GitIcon';
import { JavaIcon } from '../svgIcons/JavaIcon';
import { NodeIcon } from '../svgIcons/NodeIcon';
import { VimIcon } from '../svgIcons/VimIcon';
import { CssIcon } from '../svgIcons/CssIcon';
import { HtmlIcon } from '../svgIcons/HtmlIcon';
//import { JsIcon } from '../svgIcons/JsIcon';
import { TwIcon } from '../svgIcons/TwIcon';
import { TsIcon } from '../svgIcons/TsIcon';
import { FmIcon } from '../svgIcons/FmIcon';
import { SpringIcon } from '../svgIcons/SpringIcon';
import { SqlIcon } from '../svgIcons/SqlIcon';
import { UbuntuIcon } from '../svgIcons/UbuntuIcon';
import { JestIcon } from '../svgIcons/JestIcon';
//import { RustIcon } from '../svgIcons/RustIcon';

export const tools: StackProps[] = [
	{
		title: 'TypeScript/JavaScript',
		Svg: TsIcon
	}, {
		title: 'React',
		Svg: ReactIcon
	}, {
		title: 'Amazon Web Services',
		Svg: AwsIcon
	}, {
		title: 'Tailwind.css',
		Svg: TwIcon
	}, {
		title: 'Node',
		Svg: NodeIcon
	}, {
		title: 'Angular',
		Svg: NgIcon
	}, {
		title: 'HTML5',
		Svg: HtmlIcon
	}, {
		title: 'CSS3',
		Svg: CssIcon
	}, {
		title: 'Git/GitHub',
		Svg: GitIcon
	}, {
		title: 'Framer Motion',
		Svg: FmIcon
	}, {
		title: 'Jest',
		Svg: JestIcon
	}, {
		title: 'Java',
		Svg: JavaIcon
	}, {
		title: 'Java Spring Boot',
		Svg: SpringIcon
	}, {
		title: 'SQL/MySQL',
		Svg: SqlIcon
	}, {
		title: 'Vim/NeoVim',
		Svg: VimIcon
	}, {
		title: 'Ubuntu Linux',
		Svg: UbuntuIcon
	}
];
