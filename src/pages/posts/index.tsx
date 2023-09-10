import { Post } from '@/components/Post';
import { useFetch } from '@/hooks/useFetch';
import { usePagination } from '@/hooks/usePagination';
import { PostResponse } from '@/types/PostResponse';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const Posts = () => {
	const { page, limit, nextPage, prevPage, setLimit } = usePagination(10);
	const { data, loading, error, headers } = useFetch<PostResponse[]>(
		`${API_URL}/posts/?_expand=user&_page=${page}&_limit=${limit}`
	);
	const totalPosts = headers
		? Number(headers.get('x-total-count'))
		: Number.MAX_VALUE;

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
		<div className="flex flex-col gap-4 p-4">
			<h1 className="text-2xl font-bold">Posts</h1>
			{renderPosts()}
			<div className="flex gap-4">
				<button
					className="bg-slate-700 text-white p-2 rounded-lg disabled:opacity-50"
					onClick={prevPage}
					disabled={page <= 1}>
					Previous
				</button>
				<button
					className="bg-slate-700 text-white p-2 rounded-lg disabled:opacity-50"
					onClick={nextPage}
					disabled={page * limit >= totalPosts}>
					Next
				</button>
			</div>
			<label htmlFor="posts-limit-input">
				<span>Posts per page:</span>
				<select
					value={limit}
					onChange={e => {
						setLimit(Number(e.target.value));
					}}>
					<option value={10} disabled={page * 10 > totalPosts}>
						10
					</option>
					<option value={15} disabled={page * 15 > totalPosts}>
						15
					</option>
					<option value={20} disabled={page * 20 > totalPosts}>
						20
					</option>
					<option value={25} disabled={page * 25 > totalPosts}>
						25
					</option>
				</select>
			</label>
		</div>
	);
};

export default Posts;
