import { PostDetails } from '@/components/PostDetails';
import { useRouter } from 'next/router';

const PostDetailsPage = () => {
	const { postId } = useRouter().query;
	return postId ? <PostDetails id={Number(postId)} /> : null;
};

export default PostDetailsPage;
