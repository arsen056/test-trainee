export interface INewsState {
  totalResults: number
  news: INewsItem[]
}

interface INewsItem {
  author: string
  title: string
  description: string
  img: string
  publishedAt: string
}