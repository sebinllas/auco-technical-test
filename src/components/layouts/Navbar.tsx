import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/hooks/useTheme';
import { Theme } from '@/types/Theme';

export const Navbar = () => {
	const [theme, toggleTheme] = useTheme();
	return (
		<nav className="flex flex-wrap items-end gap-2 sm:gap-4 p-2 border-slate-300 dark:border-slate-700 
		shadow-black/20 shadow-md border-b sticky top-0 left-0 bg-gray-200 dark:bg-gray-700/40 font-bold
		backdrop-blur-md text-gray-700 dark:text-white sm:px-8 px-2">
			<ul className="flex items-center gap-2 sm:gap-4 text-sm sm:text-base grow flex-wrap">
				<li>
					<Link href={'/'}>Home</Link>
				</li>
				<li>
					<Link href={'/posts'}>Posts</Link>
				</li>
			</ul>
			<button onClick={toggleTheme}>
				{theme === Theme.Dark ? '🌞' : '🌒'}
			</button>
		</nav>
	);
};
