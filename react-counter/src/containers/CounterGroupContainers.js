// import React from 'react';
import { connect } from 'react-redux'
import CounterGroup from '../components/CounterGroup/Index'
// import {increaseAction, decreaseAction} from '../actions/Action'

const mapStateToProps = state =>{
    return {
        numbers: state.numbers,
        total: state.total
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // countAdd: (count) => {
        //     dispatch(decreaseAction)
        // },
        countUpdate: (type)=> {
            dispatch(type)
        }
    }
}

const CounterGroupContainers = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterGroup)

export default CounterGroupContainers;