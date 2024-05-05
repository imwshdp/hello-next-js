import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import React from 'react';

import { routes } from '@shared/model/routes';
import { servicesLinks } from '@shared/model/servicesLinks';
import { apiService } from '@shared/services/apiService';

type PropsType = {
	params: {
		id: string;
	};
};

// server actions (example with duck structure and bind context)
async function updatePost(data: FormData) {
	'use server';
	const { title, content, id } = Object.fromEntries(data);

	const response = await fetch(`${servicesLinks.jsonServer.posts}/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ title, body: content }),
	});

	const post = await response.json();

	revalidatePath(routes.blog.actions);
	revalidatePath(`${routes.blog.actions}/${post.id}`);
	revalidatePath(`${routes.blog.actions}/${post.id}/edit`);

	redirect(`${routes.blog.actions}/${post.id}`);
}

async function EditPostPage({ params: { id } }: PropsType) {
	const post = await apiService.jsonServer.fetchPostById(id);

	return (
		<div>
			<h1>Page of Editing {post.title}</h1>

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
