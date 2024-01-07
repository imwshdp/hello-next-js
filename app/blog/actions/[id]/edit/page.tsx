import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import React from 'react';

import { fetchPostByIdFromJsonServerDb } from '@shared/api/apiServices';
import { apiLinks } from '@shared/model/api';
import { routes } from '@shared/model/routes';

async function updatePost(data: FormData) {
	'use server';

	const { title, content, id } = Object.fromEntries(data);

	const response = await fetch(`${apiLinks.postsJsonServerDb}/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ title, body: content }),
	});

	const post = await response.json();

	revalidatePath(`${routes.blog.actions}/${post.id}`);
	redirect(`${routes.blog.actions}/${post.id}`);
}

type PropsType = {
	params: {
		id: string;
	};
};
async function EditPostPage({ params: { id } }: PropsType) {
	const post = await fetchPostByIdFromJsonServerDb(id);

	return (
		<div>
			<h1>Page of editing {post.title}</h1>

			<form className='vertical-form' action={updatePost.bind(null)}>
				<input type='text' placeholder='title' required name='title' defaultValue={post.title} />

				<textarea placeholder='content' required name='content' defaultValue={post.body} />

				<input type='hidden' name='id' value={post.id} />

				<button type='submit'>Update post</button>
			</form>
		</div>
	);
}

export default EditPostPage;
