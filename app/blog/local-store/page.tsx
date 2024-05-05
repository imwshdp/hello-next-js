import { Metadata } from 'next';

import React from 'react';

import PostsListWithStore from '@app/blog/local-store/components/PostsListWithStore';
import PostsSearchWithStore from '@app/blog/local-store/components/PostsSearchWithStore';

export const metadata: Metadata = {
	title: 'Blog Demo | Zustand Store',
};

function BlogWithFetchByStore() {
	return (
		<>
			<h2>Posts (Zustand Storing)</h2>
			<PostsSearchWithStore />
			<PostsListWithStore />
		</>
	);
}

export default BlogWithFetchByStore;
