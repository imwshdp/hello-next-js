import Link from 'next/link';

import { routes } from '@shared/model/routes';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
	return (
		<section>
			<h1>Blog</h1>
			<ul>
				<li>
					<Link href={routes.blog.hooks}>See fetching variant with hooks</Link>
				</li>
				<li>
					<Link href={routes.blog.store}>See fetching variant with store</Link>
				</li>
			</ul>
			{children}
		</section>
	);
}
