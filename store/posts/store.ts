import { create } from 'zustand';

import { PostDataType } from '@shared/model/types';
import { apiService } from '@shared/services/apiService';

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
		const posts = await apiService.local.fetchPosts();
		set({ posts, loading: false });
	},
	getFilteredPosts: async (search) => {
		set({ loading: true });
		const posts = await apiService.local.fetchFilteredPosts(search);
		set({ posts, loading: false });
	},
}));
