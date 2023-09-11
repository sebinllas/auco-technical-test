import { useFetch } from '@/hooks/useFetch';
import { CommentResponse } from '@/types/CommentResponse';
import React from 'react';
import { Post } from '@/components/Post';
import { Loading } from '@/components/Loading';
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const Comments = ({ id }: { id: number }) => {
	const { data, loading, error } = useFetch<CommentResponse[]>(
		`${API_URL}/comments?postId=${id}`
	);
	const renderComments = () => {
		if (loading) return <Loading />;
		if (error) return <p>Oh no something went wrong!</p>;
		if (!data) return <p>No data</p>;
		return (
			<div className="flex flex-col gap-4">
				{data.map(commentResponse =>
					<Post
						as={'div'}
						key={commentResponse.id}
						description={commentResponse.body}
						writer={commentResponse.email}
						title={commentResponse.name}
						id={commentResponse.id}
					/>
				)}
			</div>
		);
	};
	return (
		<div>
			{renderComments()}
		</div>
	);
};
