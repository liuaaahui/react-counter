import React, {Component} from 'react';
import Count from '../Counter/Index';

class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            numbers:0,
            total:0
        }
    }
    gerenateCount = (value) =>{
        let con = parseInt(value.target.value)
        if(Number.isNaN(con)){
            this.setState(() => {
                return{
                    numbers:0,
                }
            })
        } else {
            this.setState(() => {
                return{
                    numbers:con,
                    total:0
                }
            })
        }    
    }

    increase = () =>{
        this.setState((prevState) => {
            return{
                total:prevState.total+1,
            }
        })
    }

    reduce = () =>{
        this.setState((prevState) => {
            return{
                total:prevState.total-1,
            }
        })
    }

    render(){
        return(
            <div>
                number of counters:<input type="text" onChange={this.gerenateCount}/>
                <div>total:<span>{this.state.total}</span></div>
                {Array(this.state.numbers).fill(0).map((value,index)=>{
                    return(
                        <Count key={index} ParentIncrease={this.increase} ParentReduce={this.reduce}/>
                    ) 
                })} 
            </div>
        )
    }
}

export default Index;