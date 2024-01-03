import Link from 'next/link';

import { routes } from '@shared/model/routes';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
	return (
		<section>
			<h1>About Us</h1>
			<ul>
				<li>
					<Link href={routes.about.contacts}>Contacts</Link>
				</li>
				<li>
					<Link href={routes.about.team}>Team</Link>
				</li>
			</ul>
			{children}
		</section>
	);
}
