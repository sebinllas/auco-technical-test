import Link from 'next/link';

export default function Home() {
	return (
		<main className="flex flex-col gap-10 justify-center items-center">
			<h1 className="text-3xl text-center mt-20">
				Hi, I&apos;m{' '}
				<span className="text-blue-800 font-bold">Sebastián Suárez</span> and
				this is my technical test for Auco&apos;s frontend developer position
			</h1>
			<div className="grid md:grid-cols-2 gap-10 grid-cols-1 my-auto">
				<section className="p-4 border-slate-300 dark:border-slate-700 border rounded-lg bg-gray-500/10 flex flex-col">
					<h2 className="text-xl font-bold">
						<Link href="/posts">👨‍💻 Technical Section</Link>
					</h2>
					<p>
						A list of posts from{' '}
						<a
							href="https://jsonplaceholder.typicode.com/"
							className="underline"
							target="_blank">
							JSONPlaceholder
						</a>{' '}
						API. If you click on any post, you will be redirected to a page with
						the details of the post. On a post specific page, if you click on
						the username, you will be redirected to a page with the details of
						the user and all their posts.
					</p>
				</section>
				<section className="p-4 border-slate-300 dark:border-slate-700 border rounded-lg bg-gray-500/10 flex flex-col">
					<h2 className="text-xl font-bold">
						<Link href="/about">💙 Personal Section</Link>
					</h2>
					<p>
						A description of my professional and academic background, my
						motivations, and goals, as well as my skills and how can I
						contribute to Auco’s mission.
					</p>
				</section>
			</div>
		</main>
	);
}
