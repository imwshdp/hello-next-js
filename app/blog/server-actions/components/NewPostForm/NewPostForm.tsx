import React from 'react';

import { servicesLinks } from '@shared/model/servicesLinks';

type PropsType = {
	onSuccess: (id?: number) => Promise<void>;
};

function NewPostForm({ onSuccess }: PropsType) {
	async function createPost(data: FormData) {
		'use server';

		const { title, content } = Object.fromEntries(data);

		const response = await fetch(servicesLinks.jsonServer.posts, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title,
				body: content,
			}),
		});

		const post = await response.json();
		await onSuccess(post.id);
	}

	return (
		<form className='vertical-form' action={createPost}>
			<input type='text' name='title' placeholder='title' required />
			<textarea name='content' placeholder='content' required />

			<button type='submit'>Add New Post</button>
		</form>
	);
}

export default NewPostForm;
