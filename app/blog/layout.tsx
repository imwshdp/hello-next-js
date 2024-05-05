import Link from 'next/link';

import { routes } from '@shared/model/routes';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
	return (
		<section>
			<h1>Blog</h1>
			<ol>
				<li>
					<Link href={routes.blog.hooks}>React state variant</Link>
				</li>
				<li>
					<Link href={routes.blog.store}>Zustand store variant</Link>
				</li>
				<li>
					<Link href={routes.blog.prisma}>Prisma & sqlite variant</Link>
				</li>
				<li>
					<Link href={routes.blog.actions}>Server actions variant (Works only on localhost)</Link>
				</li>
			</ol>
			{children}
		</section>
	);
}
