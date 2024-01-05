import React from 'react';

import { Metadata } from 'next';

import PostsListWithStore from '@components/PostsListWithStore';
import PostsSearchWithStore from '@components/PostsSearchWithStore';

export const metadata: Metadata = {
	title: 'next.js blog',
};

function BlogWithFetchByStore() {
	return (
		<>
			<h2>Blog (zustand store fetch variation)</h2>
			<PostsSearchWithStore />
			<PostsListWithStore />
		</>
	);
}

export default BlogWithFetchByStore;
