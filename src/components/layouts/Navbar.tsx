import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/hooks/useTheme';
import { Theme } from '@/types/Theme';

export const Navbar = () => {
	const [theme, toggleTheme] = useTheme();
	return (
		<nav className="flex items-end gap-4 p-2 pb-4 border-slate-300 dark:border-slate-700 shadow-black/20 shadow-md border-b sticky top-0 left-0 bg-gray-200 dark:bg-gray-700/40 backdrop-blur-md">
			<div className="px-4 flex flex-col justify-center">
				<span className="text-xs font-thin text-gray-600 dark:text-gray-400">Technical test</span>
				<Image src="/auco.png" width={90} height={18} alt="Auco logo" />
			</div>
			<ul className="flex gap-4 grow">
				<li>
					<Link href={'/'}>Home</Link>
				</li>
				<li>
					<Link href={'/posts'}>Posts</Link>
				</li>
				<li>
					<Link href={'/about'}>About Me</Link>
				</li>
			</ul>
			<button onClick={toggleTheme}>
				{theme === Theme.Dark ? '🌞' : '🌒'}
			</button>
		</nav>
	);
};
