import React, {FC} from 'react';
import s from './Card.module.css'
import mockImage from 'common/assets/news-image.jpg'

type Props = {
  title: string
  description: string
  img: string
  date: string
}

export const Card:FC<Props> = ({title, img, description, date}) => {
  const time = new Date(date).toLocaleDateString()

  return (
    <li className={s.card}>
      <h2 className={s.title}>{title}</h2>
      <img className={s.img} src={img ? img : mockImage } alt={title}/>
      <p className={s.description}>{description}</p>
      <div className={s.info}>
        <span>{time}</span>
        {/*<span>like</span>*/}
      </div>
    </li>
  );
};
