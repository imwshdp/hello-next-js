import React from 'react';

import { navItems } from '@shared/model/routes';

import Navbar from '@components/Navbar';

function Header() {
	return (
		<header>
			<Navbar navLinks={navItems} />
		</header>
	);
}

export default Header;
