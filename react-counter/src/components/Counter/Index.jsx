import React, {Component} from 'react';
import {INCREASE, DECREASE} from "../../actions/Action";
import store from '../../stores/Index';

class Count extends Component{

    increase = () =>{
        
        store.dispatch({type: INCREASE, data: 1})
        console.log(store.getState());
    }

    reduce = () =>{
        store.dispatch({type: DECREASE, data: 1})
        console.log(store.getState());
    }

    // componentWillReceiveProps(nextProps){
    //     this.setState(() => {
    //         return{
    //             number:0,
    //         }
    //     })
    // }

    render(){
        console.log(store.getState())
        return (
            <div>
                <button onClick={this.increase}>+</button>
                <mark>{store.getState()}</mark>
                <button onClick={this.reduce}>-</button>
            </div>
        );
    }
}

export default Count;