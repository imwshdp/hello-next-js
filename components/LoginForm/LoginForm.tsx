'use client';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import React, { FormEventHandler } from 'react';

import { routes } from '@shared/model/routes';

function LoginForm() {
	const router = useRouter();

	const handleLogIn: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

		const response = await signIn('credentials', {
			email: formData.get('email'),
			password: formData.get('password'),
			redirect: false,
		});

		if (response && !response.error) {
			router.push(routes.profile.root);
		} else {
			console.error(response);
		}
	};

	return (
		<form onSubmit={handleLogIn} className='login-form'>
			<input type='email' name='email' placeholder='user@gmail.com' required />
			<input type='password' name='password' placeholder='0000' required />

			<button type='submit'>Log In</button>
		</form>
	);
}

export default LoginForm;
