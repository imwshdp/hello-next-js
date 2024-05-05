import { prisma } from '@lib/prisma';
import { servicesLinks } from '@shared/model/servicesLinks';
import { PostDataType } from '@shared/model/types';

export const apiService = {
	local: {
		fetchPosts: async (): Promise<PostDataType[]> => {
			try {
				const response = await fetch(servicesLinks.local.getPosts, {
					next: {
						revalidate: 60,
					},
				});
				return response.json();
			} catch (error) {
				throw new Error('Unable to fetch local posts');
			}
		},

		fetchFilteredPosts: async (search: string): Promise<PostDataType[]> => {
			try {
				const response = await fetch(`${servicesLinks.local.getPosts}?q=${search}`);
				return response.json();
			} catch (error) {
				throw new Error('Unable to fetch local filtered posts');
			}
		},
	},

	jsonServer: {
		fetchPosts: async (): Promise<PostDataType[]> => {
			try {
				const response = await fetch(servicesLinks.jsonServer.posts);
				return response.json();
			} catch (error) {
				throw new Error('Unable to fetch posts from json-server database');
			}
		},

		fetchPostById: async (id: string) => {
			try {
				const response = await fetch(`${servicesLinks.jsonServer.posts}/${id}`, {
					method: 'GET',
					headers: { 'Content-type': 'application/json' },
				});
				return response.json();
			} catch (error) {
				throw new Error('Unable to fetch post from json-server database');
			}
		},
	},

	prisma: {
		fetchPosts: () => {
			return prisma.post.findMany();
		},

		fetchPostsById: (id: string) => {
			return prisma.post.findUnique({
				where: {
					id,
				},
			});
		},
	},
};
