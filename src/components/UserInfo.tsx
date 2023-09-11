import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface UserInfoProps {
	id: number;
	name: string;
	userName: string;
	avatar: string;
}

export const UserInfo = ({ id, name, userName, avatar }: UserInfoProps) => {
	return (
		<Link href={`/users/${id}`} className="flex gap-3 items-center text-gray-600 dark:text-gray-400">
			<Image
				src={avatar}
				width={40}
				height={40}
				className="rounded-full ring-2 ring-offset-2 dark:ring-offset-gray-950 ring-gray-600 
				dark:ring-gray-400 shrink-0"
				alt={`${name} avatar`}
			/>
			<div>
				<p className="font-bold">
					{name}
				</p>
				<p className="font-thin text-xs">
					@{userName}
				</p>
			</div>
		</Link>
	);
};
