import { useForm, ValidationError } from '@formspree/react';

import tw from 'tailwind-styled-components';

import { motion } from 'framer-motion';

const Form = tw.form`
	text-sm
	lg:text-xl
	drop-shadow-xl
	text-dark-jungle-green
	dark:text-wintergreen-dream
	px-0
	lg:px-6
	py-4
	bg-hunter-green
	dark:bg-rosewood
	shadow-xl
	width-1/4
	rounded-md
	ml-10
	mr-0
	mx-10
	mb-20
`;

const InputBase = tw.div<{
	firstName?: boolean;
	surname?: boolean;
}>`
	px-3
	pt-1
	pb-2
	lg:px-10
	lg:pt-2
	lg:pb-4
	${props => props.firstName && 'pr-2'}
	${props => props.surname && 'pl-2'}
`;

const Label = tw.h5<{
	htmlFor?: string;
}>`
	text-secondary-txt
	dark:text-secondary-txt-2
	drop-shadow-xl
	pb-2
`;

const Input = tw.input`
	rounded-md
	shadow-xl
	w-full
	px-2
	lg:px-4
	py-1.5
	text-accent-txt
	dark:text-accent-txt-2
`;

const NamesWrapper = tw.div`
	flex
	grid
	grid-cols-2
`;

const Message = tw.textarea`
	rounded-md
	shadow-xl
	w-full
	px-2
	lg:px-4
	py-1.5
	text-accent-txt
	dark:text-accent-txt-2
	h-32
`;

const Send = tw(motion.button)`
	text-center
	bg-rosewood
	dark:bg-hunter-green2
	rounded-md
	py-2
	hover:scale-105
	transition
	ease-in-out
	duration-300
	delay-150
	hover:bg-dark-red
	dark:hover:bg-hunter-green
	drop-shadow-xl
	w-full
	hover:cursor-pointer
`;

export const ContactForm = () => {
	const [ state, handleSubmit ] = useForm(
		process.env.REACT_APP_CONTACT_CODE as string
	);

	if (state.succeeded)
		console.log('Email sent!!!')

	return (
		<Form onSubmit={handleSubmit}>
			<NamesWrapper>
				<InputBase firstName>
					<Label htmlFor='firstName'>First name</Label>
					<Input
						id='firstName'
						name='firstName'
						placeholder='Your first name'
					/>
					<ValidationError
						prefix='First name'
						field='firstName'
						errors={state.errors}
					/>
				</InputBase>
				<InputBase surname>
					<Label>Surname</Label>
					<Input
						id='surname'
						name='surname'
						placeholder='Your surname'
					/>
					<ValidationError
						prefix='Surname'
						field='surname'
						errors={state.errors}
					/>
				</InputBase>
			</NamesWrapper>
			<InputBase>
				<Label>Email</Label>
				<Input
					id='email'
					name='email'
					type='email'
					placeholder='Your email'
				/>
				<ValidationError
					prefix='Email'
					field='email'
					errors={state.errors}
				/>
			</InputBase>
			<InputBase>
				<Label>Message</Label>
				<Message
					id='message'
					name='message'
					placeholder='Your message'
				/>
				<ValidationError
					prefix='Message'
					field='message'
					errors={state.errors}
				/>
			</InputBase>
			<InputBase>
				<Send
					type='submit'
					disabled={state.submitting}
					whileTap={{ scale: 0.9 }}
				>Send</Send>
			</InputBase>
		</Form>
	);
};
