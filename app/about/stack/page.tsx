import React from 'react';

import {
	GITHUB_ACTIONS_LINK,
	HUSKY_LINK,
	NEXT_AUTH_LINK,
	NEXT_JS_LINK,
	PRISMA_LINK,
	SQLITE_LINK,
	ZUSTAND_LINK,
} from '@shared/data/constants';

function Team() {
	return (
		<div className='container'>
			<h2>Project libs and technologies</h2>
			<ol>
				<li>
					<span>Full-stack web applications React-based Framework </span>
					<a href={NEXT_JS_LINK} target='_blank' rel='noreferrer'>
						<b>Next.js</b>
					</a>
				</li>

				<li>
					<a href={ZUSTAND_LINK} target='_blank' rel='noreferrer'>
						<b>Zustand</b>
					</a>
					<span> state manager</span>
				</li>

				<li>
					<a href={NEXT_AUTH_LINK} target='_blank' rel='noreferrer'>
						<b>NextAuth.js</b>
					</a>
					<span> for authentication</span>
				</li>

				<li>
					<a href={SQLITE_LINK} target='_blank' rel='noreferrer'>
						<b>SQLite</b>
					</a>
					<span> as database</span>
				</li>

				<li>
					<span>Node.js ORM </span>
					<a href={PRISMA_LINK} target='_blank' rel='noreferrer'>
						<b>Prisma</b>
					</a>
				</li>

				<li>
					<a href={`${HUSKY_LINK}`} target='_blank' rel='noreferrer'>
						<b>husky</b>
					</a>
					<span> for git pre-commit hooks</span>
				</li>

				<li>
					<a href={`${GITHUB_ACTIONS_LINK}`} target='_blank' rel='noreferrer'>
						<b>GitHub Actions</b>
					</a>
					<span> for CI</span>
				</li>
			</ol>
		</div>
	);
}

export default Team;
