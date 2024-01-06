import Link from 'next/link';

import React from 'react';

import { PostDataType } from '@shared/model/model';
import { routes } from '@shared/model/routes';

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
