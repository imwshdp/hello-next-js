import Link from 'next/link';

import { routes } from '@shared/model/routes';

export default function StackLayout({ children }: { children: React.ReactNode }) {
	return (
		<section>
			<h1>About Project</h1>
			<p>...And nested routing practice</p>
			<ul>
				<li>
					<Link href={routes.about.links}>Links</Link>
				</li>
				<li>
					<Link href={routes.about.stack}>Application Stack</Link>
				</li>
			</ul>
			{children}
		</section>
	);
}
