import Link from 'next/link';

import { routes } from '@shared/model/routes';
import { apiService } from '@shared/services/apiService';

import { removePost } from '../actions';

type PropsType = {
	params: {
		id: string;
	};
};

const PostPage = async ({ params: { id } }: PropsType) => {
	const post = await apiService.prisma.fetchPostsById(id);

	if (!post) {
		return <h1>Ooops! Post not found</h1>;
	}

	return (
		<>
			<p>
				<h1>{post.title}</h1>
				<span>{post.body}</span>
			</p>

			<p>
				<Link href={`${routes.blog.prisma}/${id}/edit`}>Edit This Post</Link>
			</p>

			<form action={removePost.bind(null, id)}>
				<button type='submit'>Delete this post</button>
			</form>
		</>
	);
};

export default PostPage;
