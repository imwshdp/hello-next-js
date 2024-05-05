'use server';

// import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';

// import { routes } from '@shared/model/routes';

// export async function createPost(data: FormData) {
// 	const { title, body } = Object.entries(data);
// 	redirect(routes.blog.prisma);
// }

// export async function updatePost(data: FormData) {
// 	const { title, body, id } = Object.entries(data);

// 	revalidatePath(routes.blog.prisma);
// 	redirect(routes.blog.prisma);
// }

// export async function removePost(id: string) {
// 	revalidatePath(routes.blog.prisma);
// 	redirect(routes.blog.prisma);
// }
