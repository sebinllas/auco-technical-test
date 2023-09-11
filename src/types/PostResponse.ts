import { UserResponse } from "@/types/UserResponse"

export interface PostResponse {
  userId: number
  id: number
  title: string
  body: string
  user: UserResponse
}
