import { Metadata } from 'next';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import React from 'react';

import { apiLinks } from '@shared/model/api';
import { PostDataType } from '@shared/model/model';
import { routes } from '@shared/model/routes';

async function getPostData(id: number): Promise<PostDataType> {
	const response = await fetch(`${apiLinks.postsJsonServerDb}/${id}`, {
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

async function removePost(id: string) {
	'use server';
	await fetch(`${apiLinks.postsJsonServerDb}/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	revalidatePath(routes.blog.actions);
	redirect(routes.blog.actions);
}

async function ActionsPost({ params: { id } }: PropsType) {
	const post = await getPostData(id);

	return (
		<>
			<p>
				<h1>{post.title}</h1>
				<span>{post.body}</span>
			</p>

			<p>
				<Link href={`${routes.blog.actions}/${id}/edit`}>Edit this post</Link>
			</p>

			{/* bind context for server component */}
			<form action={removePost.bind(null, id.toString())}>
				<button type='submit'>Delete this post</button>
			</form>
		</>
	);
}

export default ActionsPost;
