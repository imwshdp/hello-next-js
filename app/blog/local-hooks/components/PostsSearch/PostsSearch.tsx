'use client';
import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';

import { PostDataType } from '@shared/model/types';
import { apiService } from '@shared/services/apiService';

type PropsType = {
	onSearch: (value: PostDataType[]) => void;
};

function PostsSearch({ onSearch }: PropsType) {
	const [search, setSearch] = useState<string>('');

	const handleSearchOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		setSearch(event.target.value);
	};

	const handleFormOnSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault();
		const filteredPosts = await apiService.local.fetchFilteredPosts(search);
		onSearch(filteredPosts);
	};

	return (
		<form onSubmit={handleFormOnSubmit}>
			<input type='search' placeholder='search posts...' value={search} onChange={handleSearchOnChange} />

			<button type='submit'>Search</button>
		</form>
	);
}

export default PostsSearch;
