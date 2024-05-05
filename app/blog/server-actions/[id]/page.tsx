import { Metadata } from 'next';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import React from 'react';

import { routes } from '@shared/model/routes';
import { servicesLinks } from '@shared/model/servicesLinks';
import { PostDataType } from '@shared/model/types';

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

const getPostData = async (id: number): Promise<PostDataType> => {
	const response = await fetch(`${servicesLinks.jsonServer.posts}/${id}`, {
		next: {
			revalidate: 60,
		},
	});
	return response.json();
};

// server actions (example with duck structure and bind context)
async function removePost(id: string) {
	'use server';
	await fetch(`${servicesLinks.jsonServer.posts}/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	revalidatePath(routes.blog.actions);
	revalidatePath(`${routes.blog.actions}/${id}`);
	revalidatePath(`${routes.blog.actions}/${id}/edit`);

	redirect(routes.blog.actions);
}

async function PostPage({ params: { id } }: PropsType) {
	const post = await getPostData(id);

	return (
		<>
			<p>
				<h1>{post.title}</h1>
				<span>{post.body}</span>
			</p>

			<p>
				<Link href={`${routes.blog.actions}/${id}/edit`}>Edit This Post</Link>
			</p>

			{/* bind context for server component */}
			<form action={removePost.bind(null, id.toString())}>
				<button type='submit'>Delete this post</button>
			</form>
		</>
	);
}

export default PostPage;
