'use client';
import Link from 'next/link';

import React, { useEffect } from 'react';

import { shallow } from 'zustand/shallow';

import { routes } from '@shared/model/routes';
import { usePosts } from '@store/posts/store';

function PostsListWithStore() {
	const [posts, loading, fetchPosts] = usePosts((state) => [state.posts, state.loading, state.getAllPosts], shallow);

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<>
			{loading ? (
				<h2>Loading blog content...</h2>
			) : (
				<ul>
					{posts.map((post) => (
						<li key={post.id}>
							<Link href={`${routes.blog.root}/${post.id}`}>{post.title}</Link>
						</li>
					))}
				</ul>
			)}
		</>
	);
}

export default PostsListWithStore;
