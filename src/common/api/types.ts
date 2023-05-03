export interface INewsState {
  articles: INews[]
  totalArticles: number
  isFavorites: boolean
}

export interface INews {
  source: { url: string, name: string }
  title: string
  description: string
  url: string
  image: string
  publishedAt: string
  content: string
  isFavorite: boolean
}
