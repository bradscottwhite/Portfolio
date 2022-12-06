import { FC } from 'react';

import Pro1Img from '../imgs/pro1-img.png';
import Pro2Img from '../imgs/pro2-img.png';
import Pro3Img from '../imgs/pro3-img.png';

// Stack icons:
import { ReactIcon } from '../svgIcons/ReactIcon';
import { AwsIcon } from '../svgIcons/AwsIcon';
import { TwIcon } from '../svgIcons/TwIcon';
import { JsIcon } from '../svgIcons/JsIcon';
import { VimIcon } from '../svgIcons/VimIcon';
import { FmIcon } from '../svgIcons/FmIcon';


type SvgType = FC<{
	fill: string;
	width: number;
	height: number;
}>;

interface StackProps {
	Svg: SvgType;
	title: string;
}

interface ProjectProps {
	title: string;
	url: string;
	img: string;
	github: string;
	desc: string;
	stack: StackProps[];
}

export type {
	SvgType,
	StackProps,
	ProjectProps
};


const reactProps: StackProps = { Svg: ReactIcon, title: 'React' };
const twProps: StackProps = { Svg: TwIcon, title: 'Tailwind' };
const awsProps: StackProps = { Svg: AwsIcon, title: 'Amazon Web Services' };
const jsProps: StackProps = { Svg: JsIcon, title: 'JavaScript' };
const vimProps: StackProps = { Svg: VimIcon, title: 'Vim/NeoVim' };
const fmProps: StackProps = { Svg: FmIcon, title: 'Framer Motion' };

export const projects: ProjectProps[] = [
	{
		title: 'Firebirdie',
		url: 'https://master.d3e9ksev6svovb.amplifyapp.com/',
		img: Pro1Img,
		github: 'https://github.com/bradscottwhite/firebirdie',
		stack: [ reactProps, awsProps, twProps, jsProps, vimProps ],
		desc: 'A minimalistic social media app built with React.js / AWS / Tailwind.css'
	}, {
		title: 'Planner App',
		url: 'https://master.d11uj72wdz44tv.amplifyapp.com/',
		img: Pro2Img,
		github: 'https://github.com/bradscottwhite/planner-app',
		stack: [ reactProps, awsProps, twProps, jsProps, vimProps, fmProps ],
		desc: 'A minimalistic productivity planner app built with React.js / AWS / Tailwind.css / Framer Motion'
	}, {
		title: 'Todo App',
		url: 'https://master.d3fb1wjw2da8y7.amplifyapp.com/',
		img: Pro3Img,
		github: 'https://github.com/bradscottwhite/todo-app',
		stack: [ reactProps, awsProps, twProps, jsProps, vimProps, fmProps ],
		desc: 'A minimalist todo app using React / AWS / Tailwind.css / Framer Motion'
	}
];
