import React from 'react';
import {Card} from "components/card";
import s from 'components/news/News.module.css'

import {useGetNews} from "common/hooks/useGetNews";

export const News = () => {
  const news = useGetNews()

  return (
    <ul className={s.newsList}>
      {news.length ? news.map(newsItem =>
        <Card
          key={newsItem.url}
          title={newsItem.title}
          description={newsItem.description}
          img={newsItem.image}
          date={newsItem.publishedAt}
          isFavorite={newsItem.isFavorite}
          url={newsItem.url}
        />) : <h2 className={s.listEmpty}>Oops list empty...</h2>
      }
    </ul>
  );
};
