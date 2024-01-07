/* eslint-disable @typescript-eslint/no-unused-vars */
import { Metadata } from 'next';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';

import { fetchPostsFromJsonServerDb } from '@shared/api/apiServices';
import { GITHUB_DEV_LINK } from '@shared/data/constants';
import { PostDataType } from '@shared/model/model';
import { routes } from '@shared/model/routes';

import NewPostForm from '@components/NewPostForm';
import PostsList from '@components/PostsList';

export const metadata: Metadata = {
	title: 'next.js blog with server actions',
};

export const revalidate = 10;

async function BlogWithFetchByHooks() {
	// TODO: uncomment
	// const posts: PostDataType[] = await fetchPostsFromJsonServerDb();

	return (
		<>
			<h2>Posts (json server fetching variant)</h2>
			<h3>Attention: Run locally!</h3>
			<p>Uncomment TODO: uncomment in app/blog/actions/page.tsx component</p>
			<p>
				Use <em>npm run dev-with-server</em> or split your terminal with <em>npm run dev + npm run server</em>
			</p>
			<p>
				<span>Don&apos;t forget to change NEXTAUTH_URL in your .env file and change links for </span>
				<a href={`${GITHUB_DEV_LINK}`} target='_blank' rel='noreferrer'>
					<strong>OAuth</strong>
				</a>
				<span> GitHub App</span>
			</p>

			{/* TODO: uncomment */}
			{/* <div className='form'>
				<Link href={routes.blog.actionsNew}>Go to new post creation page</Link>
				<hr />
				<PostsList posts={posts} isForServerActions />
				<hr />
				<NewPostForm
					onSuccess={async () => {
						'use server';
						revalidatePath(routes.blog.actions);
					}}
				/>
			</div> */}
		</>
	);
}

export default BlogWithFetchByHooks;
