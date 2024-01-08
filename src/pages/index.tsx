import Link from 'next/link';

export default function Home() {
	return (
		<main className='flex flex-col gap-10 justify-center items-center'>
			<h1 className='text-3xl text-center mt-20'>
				Hi, I&apos;m{' '}
				<a
					href='https://github.com/sebinllas'
					target='_blank'
					className='text-blue-800 font-bold underline'>
					Sebastián Suárez
				</a>{' '}
				welcome to my posts app
			</h1>
			<div className='flex justify-center'>
				<article className='p-4 border-slate-300 dark:border-slate-700 border rounded-lg bg-gray-500/10 flex flex-col max-w-[600px]'>
					<h2 className='text-xl font-bold'>
						<Link href='/posts'>👨‍💻 Go to the posts</Link>
					</h2>
					<p>
						A list of posts from{' '}
						<a
							href='https://jsonplaceholder.typicode.com/'
							className='underline'
							target='_blank'>
							JSONPlaceholder
						</a>{' '}
						API. If you click on any post, you will be redirected to a page with
						the details of the post. On a post specific page, if you click on
						the username, you will be redirected to a page with the details of
						the user and all their posts.
					</p>
				</article>
			</div>
		</main>
	);
}
