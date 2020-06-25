import React from 'react';
import classes from './result-item.module.css';
import RemoveButton from '../../../UI/RemoveButton/RemoveButton';

const resultItem = props => 
   <div className={classes.ResultItem}>
       <RemoveButton click={()=>props.remove(props.title)}></RemoveButton>
       <p>{props.title}</p>
       <p>{props.details}</p>
   </div>

export default resultItem;