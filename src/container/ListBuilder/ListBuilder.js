import React, {Component} from 'react';
import InputForm from '../../component/InputForm/InputForm';
import ResultList from '../../component/ResultList/ResultList';
import classes from './list-builder.module.css';
import Spinner from '../../UI/Spinner/Spinner';
import axios from '../../axios-update';

class listBuilder extends Component{
    state = {
        resultList: null,
        loading: false
    }
    componentDidMount = () =>{
        axios.get('/first-data.json')
            .then(response=> {this.setState({resultList: response.data}); console.log(response)})
            .catch(error=> console.log(error));

    }
    addContent = (input) => {
        this.setState({loading: true});
        let newList = [...this.state.resultList];
        newList.push(input);
        this.updateData(newList);
        this.setState({
            resultList: newList
        });
    }
    removeContent = (id) =>{
        this.setState({loading: true});
        let newList = [...this.state.resultList];
        const elementIndex = newList.findIndex(el => el.key === id);
        newList.splice(elementIndex,1);
        console.log(newList);
        this.updateData(newList);
        this.setState({
            resultList: newList
        });
    }
    updateData = list =>{
        axios.post('/data.json',list)
            .then(response=>{
                this.setState({
                    loading: false
                })
            })
            .catch(error=>{
                this.setState({
                    loading: false
                })
            });
    }
    render(){
        let resultList = <Spinner></Spinner>;
        let inputForm = <Spinner></Spinner>;
        if(this.state.resultList){
            resultList = (<ResultList remove={this.removeContent} resultList={this.state.resultList}>
                </ResultList>);
            inputForm = <InputForm add={this.addContent}></InputForm>
        }
        if(this.state.loading){
            resultList = <Spinner></Spinner>;
        }
        return(
            <div className={classes.ListBuilder}>
                {inputForm}
                {resultList}
            </div>
        )
    }

}

export default listBuilder;