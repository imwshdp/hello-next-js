import { Metadata } from 'next';

import React from 'react';

import { apiLinks } from '@shared/model/api';
import { PostDataType } from '@shared/model/types';

async function getPostData(id: number): Promise<PostDataType> {
	const response = await fetch(`${apiLinks.getPosts}/${id}`, {
		next: {
			revalidate: 60,
		},
	});
	return response.json();
}

type PropsType = {
	params: {
		id: number;
	};
};

export async function generateMetadata({ params: { id } }: PropsType): Promise<Metadata> {
	return {
		title: `next.js post #${id}`,
	};
}

async function Post({ params: { id } }: PropsType) {
	const post = await getPostData(id);

	return (
		<>
			<h1>{post.title}</h1>
			<span>{post.body}</span>
		</>
	);
}

export default Post;
