import React from 'react';

function Team() {
	return (
		<div className='container'>
			<h2>Project libs and technologies</h2>
			<ol>
				<li>
					<a href='https://nextjs.org/' target='_blank' rel='noreferrer'>
						<b>Next.js</b> Framework
					</a>
				</li>

				<li>
					<a href='https://docs.pmnd.rs/zustand/getting-started/introduction' target='_blank' rel='noreferrer'>
						<b>Zustand</b> state manager
					</a>
				</li>

				<li>
					<a href='https://next-auth.js.org/' target='_blank' rel='noreferrer'>
						<b>NextAuth.js</b> for authentication
					</a>
				</li>

				<li>
					<a href='https://www.sqlite.org/index.html' target='_blank' rel='noreferrer'>
						<b>SQLite</b> as database
					</a>
				</li>

				<li>
					<a href='https://www.prisma.io/' target='_blank' rel='noreferrer'>
						Node.js ORM <b>Prisma</b>
					</a>
				</li>
			</ol>
		</div>
	);
}

export default Team;
