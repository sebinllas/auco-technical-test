import { Post as PostType } from '@/types/Post';
import Link from 'next/link';
import React from 'react';

interface PostProps extends PostType {
	as?: string | typeof Link | React.FC;
}

export const Post = ({ id, description, writer, title, as: Wrapper = Link }: PostProps) => {
	return (
		<Wrapper
			href={`/posts/${id}`}
			className="p-4 border-slate-300 dark:border-slate-700 border rounded-lg bg-gray-500/10">
			<h2 className="text-xl font-bold">
				{title}
			</h2>
			<p className="font-light text-gray-500 text-xs">
				{writer}
			</p>
			<p>
				{description}
			</p>
		</Wrapper>
	);
};
