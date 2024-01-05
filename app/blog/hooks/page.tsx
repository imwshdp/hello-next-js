'use client';

import React, { useEffect, useState } from 'react';

import { fetchPosts } from '@shared/api/apiServices';
import { PostDataType } from '@shared/model/types';

import PostsList from '@components/PostsList';
import PostsSearch from '@components/PostsSearch';

function BlogWithFetchByHooks() {
	const [posts, setPosts] = useState<PostDataType[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		fetchPosts()
			.then(setPosts)
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<>
			<h2>Blog (hooks fetch variation)</h2>
			<PostsSearch onSearch={setPosts} />
			{isLoading ? <h2>Loading blog content...</h2> : <PostsList posts={posts} />}
		</>
	);
}

export default BlogWithFetchByHooks;
