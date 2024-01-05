import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'next.js blog',
};

function Blog() {
	return (
		<>
			{/* TODO: uncomment fot hooks using method */}
			{/* <h1>Blog</h1>
			<PostsSearch onSearch={setPosts} />
			{isLoading ? <h2>Loading blog content...</h2> : <PostsList posts={posts} />} */}
		</>
	);
}

export default Blog;
