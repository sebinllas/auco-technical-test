import { Post } from '@/components/Post';
import { useFetch } from '@/hooks/useFetch';
import { PostResponse } from '@/types/PostResponse';
import { FetchResult } from '@/components/FetchResult';
import { useRouter } from 'next/router';
import { UserDetails } from '@/components/UserDetails';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const UserPosts = () => {
  const userId = useRouter().query.userId;
	const { data, loading, error } = useFetch<PostResponse[]>(
		`${API_URL}/posts?userId=${userId}`
	);

	return (
		<div className="flex flex-col gap-4">
      {userId && <UserDetails id={Number(userId)} />}
			<h1 className="font-bold mt-4">User posts:</h1>
			<FetchResult error={error} loading={loading} data={data}>
				{data?.map(postResponse =>
					<Post
						key={postResponse.id}
						id={postResponse.id}
						title={postResponse.title}
						description={postResponse.body}
						writer=''
					/>
				)}
			</FetchResult>
		</div>
	);
};

export default UserPosts;
