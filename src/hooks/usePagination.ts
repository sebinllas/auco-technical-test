import { useRouter } from "next/router"
import { useState } from "react"

export const usePagination = (initialLimit: number)=>{
  const {push, query, pathname} = useRouter()
  const page = query.page ? Number(query.page) : 1
  const [limit, setLimit] = useState(initialLimit)
  const nextPage = ()=>{ 
    push({
      pathname,
      query: {
        page: page + 1,
      }
    })
  }
  const prevPage = ()=>{
    push({
      pathname,
      query: {
        page: page === 1 ? 1 : page - 1,
      }
    })
  }
  const setPage = (page: number)=>{
    push({
      pathname,
      query: {
        page,
      }
    })
  }
  return{
    page, limit, nextPage, prevPage, setLimit, setPage
  }
} 