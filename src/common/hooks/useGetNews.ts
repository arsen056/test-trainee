import {useEffect} from "react";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {fetchNews} from "news/newsSlice";
import {useSelector} from "react-redux";
import {selectNews} from "news/selectors";
export const useGetNews = () => {
  const dispatch = useAppDispatch()
  const { articles: news } = useSelector(selectNews)

  useEffect(() => {
    if (!news.length) dispatch(fetchNews())
  }, [dispatch, news])

  return news;
}