import React from 'react';
import {FilterButtons} from "components/filterButtons";
import s from './Header.module.css'

export const Header = () => {
  return (
    <header className={s.header}>
      <h1>News</h1>
      <FilterButtons />
    </header>
  );
};
