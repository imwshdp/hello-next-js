import { Metadata } from 'next';
import Link from 'next/link';

import { routes } from '@shared/model/routes';
import { apiService } from '@shared/services/apiService';

export const metadata: Metadata = {
	title: 'Blog Demo | Prisma & Sqlite Db',
};

async function Blog() {
	const posts = await apiService.prisma.fetchPosts();

	return (
		<>
			<h2>Posts (Prisma with Sqlite database)</h2>
			<Link href={routes.blog.prismaNew}>Create new post</Link>
			<hr />

			<ol>
				{posts.map((post) => (
					<li key={post.id}>
						<Link href={`${routes.blog.prisma}/${post.id}`}>{post.title}</Link>
					</li>
				))}
			</ol>
		</>
	);
}

export default Blog;
