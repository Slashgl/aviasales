import React from 'react';
import classes from './Filter.module.scss';

function Filter() {
  return (
    <div className={classes.filter}>
      <div className={classes['filter-descr']}>Количество пересадок</div>
      <div className={classes['filter-items']}>
        <label className={classes['filter-wrapper']} htmlFor="all">
          <input className={classes.check} type="checkbox" value="" id="all" />
          Все
        </label>
      </div>
      <div className={classes['filter-items']}>
        <label className={classes['filter-wrapper']} htmlFor="0">
          <input className={classes.check} type="checkbox" value="" id="0" />
          Без пересадок
        </label>
      </div>
      <div className={classes['filter-items']}>
        <label className={classes['filter-wrapper']} htmlFor="1">
          <input className={classes.check} type="checkbox" value="" id="1" />
          1 пересадка
        </label>
      </div>
      <div className={classes['filter-items']}>
        <label className={classes['filter-wrapper']} htmlFor="2">
          <input className={classes.check} type="checkbox" value="" id="2" />
          2 пересадки
        </label>
      </div>
      <div className={classes['filter-items']}>
        <label className={classes['filter-wrapper']} htmlFor="3">
          <input className={classes.check} type="checkbox" value="" id="3" />
          3 пересадки
        </label>
      </div>
    </div>
  );
}

export default Filter;
