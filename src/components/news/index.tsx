import React from 'react';
import {Card} from "components/card";
import s from 'components/news/News.module.css'

import {useGetNews} from "hooks/useGetNews";

export const News = () => {
  const news = useGetNews()

  return (
    <ul className={s.newsList}>
      {news.map(newsItem =>
        <Card
          key={newsItem.url}
          title={newsItem.title}
          description={newsItem.description}
          img={newsItem.urlToImage}
          date={newsItem.publishedAt}/> )
      }
    </ul>
  );
};
