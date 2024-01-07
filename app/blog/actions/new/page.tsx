import { redirect } from 'next/navigation';

import React from 'react';

import { routes } from '@shared/model/routes';

import NewPostForm from '@components/NewPostForm';

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
