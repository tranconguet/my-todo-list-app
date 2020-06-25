import React, {Component} from 'react';
import classes from './input-form.module.css';




class inputForm extends Component{
    clearInput = () => {    
        document.getElementById('ipTitle').value = '';
        document.getElementById('ipDetails').value = '';
    }
    getInput = () => {
        const inputTitle = document.getElementById('ipTitle').value;
        const inputDetails = document.getElementById('ipDetails').value;
        const input = {
            title: inputTitle, 
            details: inputDetails
        };
        this.clearInput();
        return input;
    }

    render(){
        return(
            <div className={classes.InputForm}>
                <p>Title: </p>
                <input id="ipTitle" type="text"></input>
                <p>Detail: </p>
                <textarea id="ipDetails" className={classes.InputDetails} type="text" size="50"></textarea>
                <button onClick={()=>this.props.add(this.getInput())}>Add</button>
            </div>
        )
    }
}
   

export default inputForm;