import { Metadata } from 'next';

import React from 'react';

import GithubButton from '@app/login/components/GithubButton';
import LoginForm from '@app/login/components/LoginForm';

export const metadata: Metadata = {
	title: 'next.js log in',
};

function LogInPage() {
	return (
		<div className={['container', 'login'].join(' ')}>
			<h1>Log In</h1>
			<LoginForm />
			<span>or</span>
			<GithubButton />
		</div>
	);
}

export default LogInPage;
