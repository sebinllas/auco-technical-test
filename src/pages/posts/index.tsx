import { Post } from '@/components/Post';
import { useFetch } from '@/hooks/useFetch';
import { PostResponse } from '@/types/PostResponse';
import { useRouter } from 'next/router';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const Posts = () => {
	const page = useRouter().query.page || 1;
	const limit = 15;

	const { data, loading, error } = useFetch<PostResponse[]>(
		`${API_URL}/posts/?_expand=user&_page=${page}&_limit=${limit}`
	);


	const renderPosts = () => {
		if (loading) return <p>Loading...</p>;
		if (error) return <p>Oh no something went wrong!</p>;
		if (!data) return <p>No data</p>;
		return data.map(postResponse =>
			<Post
				key={postResponse.id}
				id={postResponse.id}
				title={postResponse.title}
				description={postResponse.body}
				writer={postResponse.user.name}
			/>
		);
	};

	return (
		<div className='flex flex-col gap-4 p-4'>
			<h1 className='text-2xl font-bold'>Posts</h1>
			{renderPosts()}
		</div>
	);
};

export default Posts;
