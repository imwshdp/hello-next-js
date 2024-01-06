'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

import React from 'react';

import { NavLink } from '@shared/model/model';
import { routes } from '@shared/model/routes';

type PropsType = {
	navLinks: NavLink[];
};

function Navbar({ navLinks }: PropsType) {
	const pathname = usePathname();
	const session = useSession();

	const handleSignOut = () => {
		signOut({
			callbackUrl: '/',
		});
	};

	return (
		<nav>
			{navLinks.map(({ href, label }) => {
				const isActive =
					(href !== routes.root && pathname.includes(href)) || (href === routes.root && href === pathname);
				return (
					<Link key={href} href={href} className={isActive ? 'active' : ''}>
						{label}
					</Link>
				);
			})}

			{session?.data && (
				<Link href={routes.profile.root} className={pathname === routes.profile.root ? 'active' : ''}>
					Profile
				</Link>
			)}

			{session?.data ? (
				<Link href={'#'} onClick={handleSignOut}>
					Log out
				</Link>
			) : (
				<Link href={routes.login.root} className={pathname === routes.login.root ? 'active' : ''}>
					Log in
				</Link>
			)}
		</nav>
	);
}

export default Navbar;
