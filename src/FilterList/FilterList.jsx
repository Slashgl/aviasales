import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {checkFilter} from "../toolkitSlice/toolkitSlice";
import classes from "./Filter.module.scss";

function FilterList() {
    const filters = useSelector((state) => state.toolkit.transfer);
    const dispatch = useDispatch();

    return (
        <div className={classes.filter}>
            <div className={classes['filter-descr']}>Количество пересадок</div>
            <div className={classes['filter-items']}>
                {
                    filters.map(item => (
                        <label className={classes['filter-wrapper']}
                               htmlFor={item.name}
                               key={item.id}>
                            <input className={classes.check}
                                   type="checkbox"
                                   id={item.name}
                                   checked={item.checked}
                                   onChange={() => dispatch(checkFilter(item.id))}/>
                            {item.label}
                        </label>
                    ))
                }
            </div>
        </div>
    )
}

export default FilterList;
