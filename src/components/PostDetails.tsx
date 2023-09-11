import { useFetch } from '@/hooks/useFetch';
import { PostResponse } from '@/types/PostResponse';
import React from 'react';
import { UserInfo } from '@/components/UserInfo';
import { Comments } from '@/components/Comments';
import { FetchResult } from '@/components/FetchResult';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const AVATARS_API_URL = process.env.NEXT_PUBLIC_AVATARS_API_URL;

export const PostDetails = ({ id }: { id: number }) => {
	const { data, loading, error } = useFetch<PostResponse>(
		`${API_URL}/posts/${id}?_expand=user`
	);
	return (
		<FetchResult error={error} loading={loading} data={data}>
			{data &&
				<div>
					<h1 className="text-3xl font-bold mb-4">
						{data.title}
					</h1>
					<p className="mb-4">
						{data.body}
					</p>
					<UserInfo
						id={data.user.id}
						name={data.user.name}
						userName={data.user.username}
						avatar={`${AVATARS_API_URL}/?background=random&name=${data.user
							.name}`}
					/>
					<h2 className="font-bold mt-4 mb-2">Comments:</h2>
					<Comments id={data.id} />
				</div>}
		</FetchResult>
	);
};
