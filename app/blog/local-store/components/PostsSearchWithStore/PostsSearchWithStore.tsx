'use client';
import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';

import { usePosts } from '@store/posts/store';

function PostsSearchWithStore() {
	const [fetchFilteredPosts] = usePosts((state) => [state.getFilteredPosts]);

	const [search, setSearch] = useState<string>('');

	const handleSearchOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		setSearch(event.target.value);
	};

	const handleFormOnSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault();
		await fetchFilteredPosts(search);
	};

	return (
		<form onSubmit={handleFormOnSubmit}>
			<input type='search' placeholder='search posts...' value={search} onChange={handleSearchOnChange} />

			<button type='submit'>Search</button>
		</form>
	);
}

export default PostsSearchWithStore;
