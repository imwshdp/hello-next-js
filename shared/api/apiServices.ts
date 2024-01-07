import { apiLinks } from '@shared/model/api';
import { PostDataType } from '@shared/model/model';

export const fetchPosts = async (): Promise<PostDataType[]> => {
	const response = await fetch(apiLinks.getPostsFromLocalDatabase, {
		next: {
			revalidate: 60,
		},
	});

	if (!response.ok) throw new Error('Unable to fetch posts.');

	return response.json();
};

export const fetchFilteredPosts = async (search: string): Promise<PostDataType[]> => {
	const response = await fetch(`${apiLinks.getPostsFromLocalDatabase}?q=${search}`);

	if (!response.ok) throw new Error('Unable to fetch posts');
	return response.json();
};

export const fetchPostsFromJsonServerDb = async (): Promise<PostDataType[]> => {
	const response = await fetch(apiLinks.postsJsonServerDb);

	if (!response.ok) throw new Error('Unable to fetch posts.');

	return response.json();
};

export const fetchPostByIdFromJsonServerDb = async (id: string) => {
	const response = await fetch(`${apiLinks.postsJsonServerDb}/${id}`, {
		method: 'GET',
		headers: { 'Content-type': 'application/json' },
	});

	if (!response.ok) throw new Error('Unable to fetch post.');

	return response.json();
};
