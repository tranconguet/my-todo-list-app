import React from 'react';
import ResultItem from './ResultItem/ResultItem';
import classes from './result-list.module.css';

const resultList = props =>
    <div className={classes.ResultList}>
        {props.resultList.map(item=>
            <ResultItem key={item.title} title={item.title} details={item.details} remove={props.remove} > 
            </ResultItem>)}
    </div>

export default resultList;