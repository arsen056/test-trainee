import React, {FC } from 'react';
import s from './Like.module.css'

type Props = {
  toggleLike: (isFavorite: boolean) => void
  isLiked: boolean
}

export const Like:FC<Props> = ({toggleLike, isLiked}) => {

  const addLikeHandler = () => {
    toggleLike(!isLiked)
  }

  const isFilled = isLiked ? s.filled : s.unFilled

  return (
    <button className={`${s.like} ${isFilled}`} onClick={addLikeHandler} />
  );
};
