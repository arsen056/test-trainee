import {RootStateType} from "app/store";
import {INews} from "common/api/types";

export const selectNews = (state: RootStateType): INews[] => state.news.articles
export const selectIsFavorites = (state: RootStateType): boolean => state.news.isFavorites