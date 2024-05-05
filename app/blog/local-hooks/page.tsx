'use client';

import React, { useEffect, useState } from 'react';

import PostsList from '@app/blog/components/PostsList';
import PostsSearch from '@app/blog/local-hooks/components/PostsSearch';
import { PostDataType } from '@shared/model/types';
import { apiService } from '@shared/services/apiService';

function BlogWithFetchByHooks() {
	const [posts, setPosts] = useState<PostDataType[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		apiService.local
			.fetchPosts()
			.then(setPosts)
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<>
			<h2>Posts (State Storing)</h2>
			<PostsSearch onSearch={setPosts} />
			{isLoading ? <h2>Loading blog content...</h2> : <PostsList posts={posts} />}
		</>
	);
}

export default BlogWithFetchByHooks;
