import React from 'react';
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {changeFilter, resetNews} from "news/newsSlice";
import {useSelector} from "react-redux";
import {selectIsFavorites} from "news/selectors";
import s from './FilterButtons.module.css'
export const FilterButtons = () => {
  const dispatch = useAppDispatch()
  const filter = useSelector(selectIsFavorites)
  const resetNewsHandler = () => dispatch(resetNews())

  return (
    <div className={s.wrapperButtons}>
      <button className={s.button} onClick={() => dispatch(changeFilter())}>{filter ? 'All' : 'Favorites'}</button>
      <button className={s.button} onClick={resetNewsHandler}>Reset</button>
    </div>
  );
};
