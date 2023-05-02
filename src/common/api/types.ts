export interface INewsState {
  articles: INews[]
  status: string,
  totalResults: number
  isFavorites: boolean
}

export interface INews {
  source: { id: string, name: string }
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
  isFavorite: boolean
}

export type FilterType = 'all' | 'favorites'
