import React from 'react';

import { createPost } from '@app/blog/prisma-sqlite/actions';

function NewPrismaPostForm() {
	return (
		<form className='vertical-form' action={createPost}>
			<input type='text' name='title' placeholder='title' required />
			<textarea name='body' placeholder='content' required />

			<button type='submit'>Add New Post</button>
		</form>
	);
}

export default NewPrismaPostForm;
