import Link from 'next/link';

import React from 'react';

import { routes } from '@shared/model/routes';
import { PostDataType } from '@shared/model/types';

type PropsType = {
	posts: PostDataType[];
};

function PostsList({ posts }: PropsType) {
	return (
		<ul>
			{posts.map((post) => (
				<li key={post.id}>
					<Link href={`${routes.blog.root}/${post.id}`}>{post.title}</Link>
				</li>
			))}
		</ul>
	);
}

export default PostsList;
