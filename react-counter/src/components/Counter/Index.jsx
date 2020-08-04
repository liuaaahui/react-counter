import React, {Component} from 'react';
import {INCREASE, DECREASE} from "../../actions/Action";

class Count extends Component{
    constructor(props){
        super(props);
        this.state = {counts:0}
    }

    increase = () =>{
        this.setState((prevState) => {
            return{
                counts:prevState.counts+1,
            }
        })
        this.props.ParentUpdate({type: INCREASE, data: 1})
    }

    reduce = () =>{
        this.setState((prevState) => {
            return{
                counts:prevState.counts-1,
            }
        })
        this.props.ParentUpdate({type: DECREASE, data: 1})
    }

    componentDidUpdate(nextProps,nextstate){
        if(nextProps.numbers !== this.props.numbers){
            this.setState((prevState) => {
                return{
                    counts:0,
                }
            })
        }
    }

    render(){
        return (
            <div>
                <button onClick={this.increase}>+</button>
                <mark>{this.state.counts}</mark>
                <button onClick={this.reduce}>-</button>
            </div>
        );
    }
}

export default Count;