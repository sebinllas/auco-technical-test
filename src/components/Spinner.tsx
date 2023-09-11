import React from 'react';

export const Spinner = () => {
	return (
		<div
			className="animate-spin inline-block w-12 h-12 border-4 border-current border-t-transparent text-gray-600 rounded-full"
			role="status"
			aria-label="loading">
		</div>
	);
};
