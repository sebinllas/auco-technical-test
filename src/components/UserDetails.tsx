const AVATARS_API_URL = process.env.NEXT_PUBLIC_AVATARS_API_URL;
const API_URL = process.env.NEXT_PUBLIC_API_URL;

import { useFetch } from '@/hooks/useFetch';
import { UserResponse } from '@/types/UserResponse';
import React from 'react';
import { FetchResult } from './FetchResult';
import { UserInfo } from './UserInfo';

export const UserDetails = ({ id }: { id: number }) => {
	const { data, loading, error } = useFetch<UserResponse>(
		`${API_URL}/users/${id}`
	);
	return (
		<FetchResult error={error} loading={loading} data={data}>
			{data &&
				<div>
					<UserInfo
						id={data.id}
						name={data.name}
						userName={data.username}
						avatar={`${AVATARS_API_URL}/?background=random&name=${data.name}`}
					/>
					<hr className="border-gray-300 dark:border-gray-700 my-3" />
					<ul className="font-thin text-sm text-gray-600 dark:text-gray-400 flex flex-col">
						<li>
							<span className='font-bold'>🏢 Company:</span> {data.company.name}
						</li>
						<li>
							<span className='font-bold'>🗺️ City:</span> {data.address.city}
						</li>
						<li>
							<span className='font-bold'>📧 Email:</span> {data.email}
						</li>
						<li>
							<span className='font-bold'>📞 Phone:</span> {data.phone}
						</li>
						<li>
							<span className='font-bold'>🌐 Website:</span> {data.website}
						</li>
					</ul>
				</div>}
		</FetchResult>
	);
};
