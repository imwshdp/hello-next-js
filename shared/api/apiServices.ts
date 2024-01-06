import { apiLinks } from '@shared/model/api';
import { PostDataType } from '@shared/model/model';

export const fetchPosts = async (): Promise<PostDataType[]> => {
	const response = await fetch(apiLinks.getPostsFromLocalDatabase, {
		next: {
			revalidate: 60,
		},
	});
	return response.json();
};

export const fetchFilteredPosts = async (search: string): Promise<PostDataType[]> => {
	const response = await fetch(`${apiLinks.getPostsFromLocalDatabase}?q=${search}`);

	if (!response.ok) throw new Error('Unable to fetch posts');
	return response.json();
};
