'use client';
import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';

import React from 'react';

import { Github } from '@shared/assets/github';
import { routes } from '@shared/model/routes';

function GithubButton() {
	const searchParams = useSearchParams();

	const handleSignInWithGithub = () => {
		signIn('github', {
			callbackUrl: searchParams.get('callbackUrl') || routes.profile.root,
		});
	};

	return (
		<button type='button' onClick={handleSignInWithGithub} className='login-github'>
			Log in with <strong>GitHub</strong>
			<Github />
		</button>
	);
}

export default GithubButton;
