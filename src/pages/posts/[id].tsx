import { PostDetails } from '@/components/PostDetails';
import { useRouter } from 'next/router';

const PostDetailsPage = () => {
	const { id } = useRouter().query;
	return id ? <PostDetails id={Number(id)} /> : null;
};

export default PostDetailsPage;
