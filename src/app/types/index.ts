export type UsersResponse = {
  items: UserItem[]
  total_count: number
}

export type UserItem = {
  id: number
  login: string
  avatar_url: string
  html_url: string
};

export type Contributions = Record<string, number>
