import React, { ButtonHTMLAttributes } from 'react';

export const Button = ({
	onClick,
	className,
	disabled,
  children,
	...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			{...rest}
			className={`bg-slate-700 text-white p-2 rounded-lg disabled:opacity-50 ${className}`}>
			{children}
		</button>
	);
};
