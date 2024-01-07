import React from 'react';

import { apiLinks } from '@shared/model/api';

type PropsType = {
	onSuccess: (id?: number) => Promise<void>;
};

function NewPostForm({ onSuccess }: PropsType) {
	async function createPost(data: FormData) {
		'use server';

		const { title, content } = Object.fromEntries(data);

		const response = await fetch(apiLinks.postsJsonServerDb, {
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

			<button type='submit'>Add post</button>
		</form>
	);
}

export default NewPostForm;
