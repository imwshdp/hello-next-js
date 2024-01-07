import React from 'react';

import { GITHUB_ACTIONS_LINK, HUSKY_LINK, NEXT_JS_LINK, YOUTUBE_LINK, ZUSTAND_LINK } from '@shared/data/constants';

function Home() {
	return (
		<>
			<h1>Hello Next.js App</h1>
			<p>Welcome to my first next.js app template.</p>
			<p>
				This application was made following the video tutorials of{' '}
				<a href={`${YOUTUBE_LINK}`} target='_blank' rel='noreferrer'>
					<strong>Mikhail Nepomniashchii</strong>
				</a>
				.
			</p>

			<h2>Stack:</h2>
			<ol className='stack'>
				<li>
					<a href={`${NEXT_JS_LINK}`} target='_blank' rel='noreferrer'>
						<strong>Next.js</strong>
					</a>
					<span> as full-stack web applications React-based framework</span>
				</li>
				<li>
					<a href={`${ZUSTAND_LINK}`} target='_blank' rel='noreferrer'>
						<strong>Zustand</strong>
					</a>
					<span> for state management</span>
				</li>
				<li>
					<a href={`${HUSKY_LINK}`} target='_blank' rel='noreferrer'>
						<strong>husky</strong>
					</a>
					<span> for git pre-commit hooks</span>
				</li>
				<li>
					<a href={`${GITHUB_ACTIONS_LINK}`} target='_blank' rel='noreferrer'>
						<strong>GitHub Actions</strong>
					</a>
					<span> for CI</span>
				</li>
			</ol>
		</>
	);
}

export default Home;
