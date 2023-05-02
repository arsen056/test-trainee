import React, {FC} from 'react';
import s from './RemoveButton.module.css'

type Props = {
  onClick: () => void
}
export const RemoveButton:FC<Props> = ({ onClick }) => {
  return (
    <button className={s.remove} onClick={onClick} />
  );
};
