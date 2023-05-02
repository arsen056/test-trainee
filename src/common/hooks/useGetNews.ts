import {useEffect} from "react";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {fetchNews} from "news/newsSlice";
import {useSelector} from "react-redux";
import {selectIsFavorites, selectNews} from "news/selectors";
import {getFilteredNews} from "common/utils/getFilteredNews";

export const useGetNews = () => {
  const dispatch = useAppDispatch()

  const news = useSelector(selectNews)
  const isFavorites = useSelector(selectIsFavorites)

  useEffect(() => {
    if (!news.length) dispatch(fetchNews())
  }, [dispatch, news])

  return getFilteredNews(isFavorites, news);
}