import {INews} from "common/api/types";

export const getFilteredNews = (isFavorites: boolean, news: INews[]): INews[]  => {
  switch (isFavorites) {
    case true:
      return news.filter(newsItem => newsItem.isFavorite);
    default:
      return news;
  }
};