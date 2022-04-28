import React, {useEffect} from 'react';
import Ticket from '../Ticket/Ticket';
import {useDispatch, useSelector} from "react-redux";
import {fetchTickets} from "../toolkitSlice/toolkitSlice";

function Tickets() {
    const tickets = useSelector(state => state.toolkit.tickets)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTickets)
        console.log(tickets)
    })

  return (
    <div>
        <Ticket/>
    </div>
  );
}

export default Tickets;
