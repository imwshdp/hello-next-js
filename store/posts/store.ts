import { create } from 'zustand';

import { fetchFilteredPosts, fetchPosts } from '@shared/api/apiServices';
import { PostDataType } from '@shared/model/types';

type UsePostsType = {
	posts: PostDataType[];
	loading: boolean;
	getAllPosts: () => Promise<void>;
	getFilteredPosts: (search: string) => Promise<void>;
};

export const usePosts = create<UsePostsType>()((set) => ({
	posts: [],
	loading: false,
	getAllPosts: async () => {
		set({ loading: true });
		const posts = await fetchPosts();
		set({ posts, loading: false });
	},
	getFilteredPosts: async (search) => {
		set({ loading: true });
		const posts = await fetchFilteredPosts(search);
		set({ posts, loading: false });
	},
}));
