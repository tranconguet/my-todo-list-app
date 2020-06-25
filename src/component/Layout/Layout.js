import React, {Component} from 'react';
import Toolbar from '../Toolbar/Toolbar';
import classes from './layout.module.css';


class layout extends Component{

    render(){

        return(
            <React.Fragment>
                <Toolbar className={classes.Toolbar}>
                </Toolbar>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }

}
    

export default layout;