import React from 'react';
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {changeFilter, resetNews} from "news/newsSlice";
import {useSelector} from "react-redux";
import {selectIsFavorites} from "news/selectors";

export const FilterButtons = () => {
  const dispatch = useAppDispatch()
  const filter = useSelector(selectIsFavorites)

  const resetNewsHandler = () => dispatch(resetNews())

  return (
    <div>
      <button onClick={() => dispatch(changeFilter())}>{filter ? 'All' : 'Favorites'}</button>
      <button onClick={resetNewsHandler}>Reset</button>
    </div>
  );
};
