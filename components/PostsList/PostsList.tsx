import Link from 'next/link';

import React from 'react';

import { PostDataType } from '@shared/model/model';
import { routes } from '@shared/model/routes';

type PropsType = {
	posts: PostDataType[];
	isForServerActions?: boolean;
};

function PostsList({ posts, isForServerActions }: PropsType) {
	return (
		<ul>
			{posts.map((post) => {
				const hrefLink = isForServerActions ? `${routes.blog.actions}/${post.id}` : `${routes.blog.root}/${post.id}`;

				return (
					<li key={post.id}>
						<Link href={hrefLink}>{post.title}</Link>
					</li>
				);
			})}
		</ul>
	);
}

export default PostsList;
