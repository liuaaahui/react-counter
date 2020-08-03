import React, {Component} from 'react';
import Count from '../Counter/Index';
import store from '../../stores/Index';

class Index extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        // this.setState = store.getState();
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
    }
  
    handleStoreChange(){
        this.state = store.getState();
        console.log(this.state)
        // this.setState(store.getState());
    }
    gerenateCount = (value) =>{
        // console.log(this.props.store.getState())
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
                <div>total:<span>{this.state}</span></div>
                {Array(3).fill(0).map((value,index)=>{
                    return(
                        <Count key={index} ParentIncrease={this.increase} ParentReduce={this.reduce}/>
                    ) 
                })} 
            </div>
        )
    }
}

export default Index;