import React from 'react';

import { YOUTUBE_LINK } from '@shared/data/constants';

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

			<h2>Application Insides</h2>
			<p>App contains Basics Next.js Features Demo</p>
			<ul>
				<li>Client and Server Components</li>
				<li>Pages Routing with Layout Components (Nested Routing as well)</li>
				<li>Generating Metadata for Server Components</li>
				<li>Using Server Actions To Interact with Databases</li>
				<li>NextAuth.js Authentication (With GitHub Provider)</li>
				<li>Middleware Setup</li>
				<li>Several Variants of Data Fetching (Store, States)</li>
				<li>Several Variants of Data Storing (Json Server, Sqlite Database)</li>
			</ul>
		</>
	);
}

export default Home;
