import { Metadata } from 'next';

import React from 'react';

import { servicesLinks } from '@shared/model/servicesLinks';
import { PostDataType } from '@shared/model/types';

async function getPostData(id: number): Promise<PostDataType> {
	const response = await fetch(`${servicesLinks.local.getPosts}/${id}`, {
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
		title: `Post #${id} Page`,
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
