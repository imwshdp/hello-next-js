import React from 'react';

import Link from 'next/link';

import { routes } from '@shared/model/routes';

function Header() {
	return (
		<header>
			<nav>
				<Link href={routes.root}>Home</Link>
				<Link href={routes.blog.root}>Blog</Link>
				<Link href={routes.about.root}>About</Link>
			</nav>
		</header>
	);
}

export default Header;
