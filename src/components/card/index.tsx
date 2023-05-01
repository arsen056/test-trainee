import React, {FC} from 'react';
import s from './Card.module.css'

type Props = {
  title: string
  description: string
  img: string
}

export const Card:FC<Props> = ({title, img, description}) => {
  return (
    <li className={s.card}>
      <h2>{title}</h2>
      <img className={s.img} src={img} alt={title}/>
      <p className={s.description}>{description}</p>
    </li>
  );
};
