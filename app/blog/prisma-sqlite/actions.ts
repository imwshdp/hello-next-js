'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { prisma } from '@lib/prisma';
import type { Post } from '@prisma/client';
import { routes } from '@shared/model/routes';

export const createPost = async (data: FormData) => {
	const { title, body } = Object.fromEntries(data) as Omit<Post, 'id'>;

	const post = await prisma.post.create({
		data: {
			body,
			title,
		},
	});

	redirect(`${routes.blog.prisma}/${post.id}`);
};

export async function updatePost(data: FormData) {
	const { title, body, id } = Object.fromEntries(data) as Post;

	await prisma.post.update({
		where: {
			id,
		},
		data: {
			body,
			title,
		},
	});

	revalidatePath(routes.blog.prisma);
	revalidatePath(`${routes.blog.prisma}/${id}`);
	revalidatePath(`${routes.blog.prisma}/${id}/edit`);
	redirect(`${routes.blog.prisma}/${id}`);
}

export async function removePost(id: string) {
	await prisma.post.delete({
		where: {
			id,
		},
	});

	revalidatePath(routes.blog.prisma);
	revalidatePath(`${routes.blog.prisma}/${id}`);
	revalidatePath(`${routes.blog.prisma}/${id}/edit`);
	redirect(routes.blog.prisma);
}
