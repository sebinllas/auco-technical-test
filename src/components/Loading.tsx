import React from 'react'
import { Spinner } from '@/components/Spinner'

export const Loading = () => {
  return (
    <div className='w-full py-12 flex justify-center items-center gap-3 border-slate-300 
    dark:border-slate-700 border rounded-lg bg-gray-500/10 animate-pulse'>
      <Spinner/>
    </div>
  )
}
