import React, {FC} from 'react';
import s from './Card.module.css'
import mockImage from 'common/assets/news-image.jpg'
import {Like} from "components/like";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {addToFavorites, removeNews} from "news/newsSlice";
import {RemoveButton} from "components/remove";

type Props = {
  title: string
  description: string
  img: string
  date: string
  isFavorite: boolean
  url: string
}

export const Card:FC<Props> = ({title, img, description, date, url,  isFavorite}) => {
  const dispatch = useAppDispatch()

  const time = new Date(date).toLocaleDateString()

  const addLike = (isFavorite: boolean) => {
    dispatch(addToFavorites({url, isFavorite}))
  }

  const deleteNewsItem = () => dispatch(removeNews(url))

  return (
    <li className={s.card}>
      <h2 className={s.title}>{title}</h2>
      <img className={s.img} src={img ? img : mockImage } alt={title}/>
      <p className={s.description}>{description}</p>
      <div className={s.info}>
          <RemoveButton onClick={deleteNewsItem}/>
        <div className={s.rightColumn}>
          <span>{time}</span>
          <Like toggleLike={addLike} isLiked={isFavorite} />
        </div>
      </div>
    </li>
  );
};
