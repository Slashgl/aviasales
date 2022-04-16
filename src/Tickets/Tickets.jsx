import React from 'react';
import classes from './Tickets.module.scss';
import Ticket from '../Ticket/Ticket';

function Tickets() {
  return (
    <div className={classes.tickets}>
      <div className={classes['tickets-header']}>
        <div className={classes['tickets-price']}>13 400 Р</div>
        <div className={classes['tickets-img']}><img src="../../public/S7Logo.svg" alt="logo" /></div>
      </div>
      <Ticket />
      <Ticket />
    </div>
  );
}

export default Tickets;
