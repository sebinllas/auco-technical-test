import { Button } from "@/components/Button";

interface PaginationControlsProps {
	page: number;
	limit: number;
	limits: number[];
	onNextPage: () => void;
	onPrevPage: () => void;
	onLimitChange: (limit: number) => void;
	totalPosts: number;
}

export const PaginationControls = ({
	limits,
	page = 1,
	limit = limits[0],
	onNextPage,
	onPrevPage,
	onLimitChange,
	totalPosts
}: PaginationControlsProps) => {
	return (
		<div className="flex flex-col gap-4 justify-center items-center">
			<div className="flex items-center gap-4">
				<Button
					onClick={onPrevPage}
					disabled={page <= 1}>
					⬅️
				</Button>
				{page} / {Math.ceil(totalPosts / limit)}
				<Button
					onClick={onNextPage}
					disabled={page * limit >= totalPosts}>
					➡️
				</Button>
			</div>
			<label htmlFor="posts-limit-input" className="flex gap-2">
				<span>Posts per page:</span>
				<select
					id="posts-limit-input"
					className="bg-transparent text-black dark:text-white px-2 rounded-lg"
					value={limit}
					onChange={e => {
						onLimitChange(Number(e.target.value));
					}}>
					{limits.map(limit =>
						<option
							value={limit}
							key={limit}
							disabled={page * limit > totalPosts}
							className="dark:text-white dark:bg-slate-700 text-black">
							{limit}
						</option>
					)}
				</select>
			</label>
		</div>
	);
};
