import React from 'react';

import { Metadata } from 'next';
import Link from 'next/link';

import { apiLinks } from '@shared/model/api';
import { routes } from '@shared/model/routes';
import { PostDataType } from '@shared/model/types';

export const metadata: Metadata = {
	title: 'next.js blog',
};

async function getPostsData(): Promise<PostDataType[]> {
	const response = await fetch(apiLinks.getPosts, {
		next: {
			revalidate: 60,
		},
	});
	return response.json();
}

async function Blog() {
	const posts = await getPostsData();

	return (
		<>
			<h1>Blog</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<Link href={`${routes.blog.root}/${post.id}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default Blog;
