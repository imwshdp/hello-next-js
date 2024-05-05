import React from 'react';

import { apiService } from '@shared/services/apiService';

import { updatePost } from '../../actions';

type PropsType = {
	params: {
		id: string;
	};
};

async function EditPostPage({ params: { id } }: PropsType) {
	const post = await apiService.prisma.fetchPostsById(id);

	if (!post) {
		return <div>Post not found</div>;
	}

	return (
		<div>
			<h1>Page of Editing {post.title}</h1>

			<form className='vertical-form' action={updatePost}>
				<input type='text' placeholder='title' required name='title' defaultValue={post.title} />

				<textarea placeholder='content' required name='content' defaultValue={post.body} />

				<input type='hidden' name='id' value={post.id} />

				<button type='submit'>Update post</button>
			</form>
		</div>
	);
}

export default EditPostPage;
