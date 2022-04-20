import React from 'react';
import classes from './Ticket.module.scss';

function Ticket() {
  return (
    <div className={classes['tickets-info']}>
      <div className={classes['tickets-week']}>
        <div className={classes['tickets-header']}>MOW – HKT</div>
        <div className={classes['tickets-footer']}>10:45 – 08:00</div>
      </div>
      <div className={classes['tickets-way']}>
        <div className={classes['tickets-header']}>В пути</div>
        <div className={classes['tickets-footer']}>21ч 15м</div>
      </div>
      <div className={classes['tickets-transfer']}>
        <div className={classes['tickets-header']}>2 пересадки</div>
        <div className={classes['tickets-footer']}>HKG, JNB</div>
      </div>
    </div>
  );
}

export default Ticket;
