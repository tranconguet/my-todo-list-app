import React from 'react';
import classes from './toolbar.module.css';

const toolbar = props => 
   <header className={classes.Toolbar}>
       <p className={classes.Title}><strong>TODO LIST</strong></p>
   </header>

export default toolbar;