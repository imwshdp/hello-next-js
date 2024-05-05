import { Metadata } from 'next';

import { GITHUB_DEV_LINK } from '@shared/data/constants';

// import { revalidatePath } from 'next/cache';
// import Link from 'next/link';
// import PostsList from '@app/blog/components/PostsList';
// import NewPostForm from '@app/blog/server-actions/components/NewPostForm';
// import { routes } from '@shared/model/routes';
// import { PostDataType } from '@shared/model/types';
// import { apiService } from '@shared/services/apiService';

export const metadata: Metadata = {
	title: 'next.js blog with server actions',
};

export const revalidate = 10;

async function BlogWithFetchByHooks() {
	// TODO: uncomment
	// const posts: PostDataType[] = await apiService.jsonServer.fetchPosts();

	return (
		<>
			<h2>Posts (Json-Server Database Fetching)</h2>
			<h3>Attention: Runs only locally!</h3>

			<details>
				<summary>Instructions</summary>

				<p>
					Uncomment all inside <i>app/blog/server-actions/page.tsx</i> Page File
				</p>
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
			</details>

			{/* <hr />

			<div className='form'>
				<Link href={routes.blog.actionsNew}>Create new post</Link>
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
