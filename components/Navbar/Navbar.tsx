'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';

import { routes } from '@shared/model/routes';
import { NavLink } from '@shared/model/types';

type PropsType = {
	navLinks: NavLink[];
};

function Navbar({ navLinks }: PropsType) {
	const pathname = usePathname();

	return (
		<nav>
			{navLinks.map(({ href, label }) => {
				console.log('href', href);
				console.log('pathname', pathname);

				const isActive =
					(href !== routes.root && pathname.includes(href)) || (href === routes.root && href === pathname);
				return (
					<Link key={href} href={href} className={isActive ? 'active' : ''}>
						{label}
					</Link>
				);
			})}
		</nav>
	);
}

export default Navbar;
