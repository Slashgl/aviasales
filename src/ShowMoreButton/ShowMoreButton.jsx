import React from 'react';
import classes from './ShowMoreButton.module.scss';

function ShowMoreButton() {
  return (
    <button type="button" className={classes.showMore}>Показать еще 5 билетов!</button>
  );
}
export default ShowMoreButton;
