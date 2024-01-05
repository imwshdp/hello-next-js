import { apiLinks } from '@shared/model/api';
import { PostDataType } from '@shared/model/types';

export const fetchPosts = async (): Promise<PostDataType[]> => {
	const response = await fetch(apiLinks.getPosts, {
		next: {
			revalidate: 60,
		},
	});
	return response.json();
};

export const fetchFilteredPosts = async (search: string): Promise<PostDataType[]> => {
	const response = await fetch(`${apiLinks.getPosts}?q=${search}`);

	if (!response.ok) throw new Error('Unable to fetch posts');
	return response.json();
};
