import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {activeAll} from '../toolkitSlice/toolkitSlice';
import classes from "./Filter.module.scss";

function FilterList() {
    const transfer = useSelector((state) => state.toolkit.transfer);
    const dispatch = useDispatch();


    return (

        <div className={classes.filter}>
            <div className={classes['filter-descr']}>Количество пересадок</div>
            <div className={classes['filter-items']}>
                {
                    transfer.map(item => (
                        <label className={classes['filter-wrapper']} htmlFor={item.name} key={item.id} onClick={() => dispatch(activeAll(item.id))}>
                            <input className={classes.check} type="checkbox" id={item.name} defaultChecked={item.checked}/>
                            {item.name}
                        </label>
                    ))
                }
            </div>
        </div>

    )
}

export default FilterList;
