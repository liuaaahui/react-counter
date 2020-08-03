import React, {Component} from 'react';

class Count extends Component{

    constructor(props){
        super(props);
        this.state = {
            number:0,
        }
    }

    increase = () =>{
        this.setState((prevState) => {
            return{
                number:prevState.number+1,
            }
        })
    }

    reduce = () =>{
        this.setState((prevState) => {
            return{
                number:prevState.number-1,
            }
        })
    }

    render(){
        return (
            <div>
                <button onClick={this.increase}>+</button>
                <mark>{this.state.number}</mark>
                <button onClick={this.reduce}>-</button>
            </div>
        );
    }
}

export default Count;