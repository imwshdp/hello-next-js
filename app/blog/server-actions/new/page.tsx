import { redirect } from 'next/navigation';

import React from 'react';

import NewPostForm from '@app/blog/server-actions/components/NewPostForm';
import { routes } from '@shared/model/routes';

function CreateNewPostPage() {
	return (
		<NewPostForm
			onSuccess={async (id) => {
				'use server';
				redirect(`${routes.blog.actions}/${id}`);
			}}
		/>
	);
}

export default CreateNewPostPage;
