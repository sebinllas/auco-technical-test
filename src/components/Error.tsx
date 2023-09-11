import { Button } from '@/components/Button'

export const Error = () => {
  return (
    <div className='w-full py-12 flex flex-col justify-center items-center gap-3 border-slate-300 
    dark:border-slate-700 border rounded-lg bg-gray-500/10'>
      <p>
        Oh no something went wrong!
			</p>
      <Button onClick={() => window.location.reload()}>🔄 try again</Button>
    </div>
  )
}
