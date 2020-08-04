import React, {Component} from 'react';
import Count from '../Counter/Index';
import {GIVENUMBER, CLEAN} from "../../actions/Action";

class Index extends Component{ 
    gerenateCount = (value) =>{
        let con = parseInt(value.target.value)
        if(Number.isNaN(con)){
            this.props.countUpdate({type: CLEAN, data: 0})
        } else {
            this.props.countUpdate({type: GIVENUMBER, data: con})

        }    
    }

    updateNumbers = (type) =>{
        this.props.countUpdate(type)
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
        let {numbers, total} = this.props
        return(
            <div>
                number of counters:<input type="text" onChange={this.gerenateCount}/>
                <div>total:<span>{total}</span></div>
                {Array(numbers).fill(0).map((value,index)=>{
                    return(
                        <Count key={index} ParentUpdate={this.updateNumbers} numbers={this.props.numbers}/>
                    ) 
                })} 
            </div>
        )
    }
}

export default Index;