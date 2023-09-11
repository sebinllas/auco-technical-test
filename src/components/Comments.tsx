import { useFetch } from '@/hooks/useFetch';
import { CommentResponse } from '@/types/CommentResponse';
import React from 'react';
import { Post } from '@/components/Post';
import { FetchResult } from '@/components/FetchResult';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const Comments = ({ id }: { id: number }) => {
	const { data, loading, error } = useFetch<CommentResponse[]>(
		`${API_URL}/comments?postId=${id}`
	);
	return (
		<FetchResult error={error} loading={loading} data={data}>
			<div className="flex flex-col gap-4">
				{data?.map(commentResponse =>
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
		</FetchResult>
	);
};
