'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';

import { NavLink } from '@shared/model/types';

type PropsType = {
	navLinks: NavLink[];
};

function Navbar({ navLinks }: PropsType) {
	const pathname = usePathname();

	return (
		<nav>
			{navLinks.map(({ href, label }) => {
				const isActive = pathname === href;
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
