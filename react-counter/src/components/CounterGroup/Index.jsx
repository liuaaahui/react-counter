import React, {Component} from 'react';
import Count from '../Counter/Index';

class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            numbers:0
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
                }
            })
        }    
    }
    render(){
        return(
            <div>
                number of counters:<input type="text" onChange={this.gerenateCount}/>
                {Array(this.state.numbers).fill(0).map((value,index)=>{
                    return(
                        <Count key={index}/>
                    ) 
                })}
            </div>
        )
    }
}

export default Index;