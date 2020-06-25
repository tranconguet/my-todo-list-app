import React from 'react';
import classes from './remove-button.module.css';


const removeButton = props => (
    <div className={classes.RemoveContainer} onClick={props.click}>
        <div className={classes.LeftRight}></div>
        <div className={classes.RightLeft}></div>
        <label className={classes.Remove}>Remove</label>
    </div>
)

export default removeButton;