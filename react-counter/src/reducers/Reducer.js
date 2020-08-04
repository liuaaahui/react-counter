import {INCREASE, DECREASE, GIVENUMBER, CLEAN} from "../actions/Action";
 
let initState = {
    numbers:0,
    total:0
}

export function ChangeValue(state=initState,action){
    let newState = {...state};
    switch(action.type){
        case INCREASE:
            newState.total = state.total + action.data;
            return newState
        case DECREASE:
            newState.total = state.total - action.data;
            return newState
        case GIVENUMBER:
            newState.numbers = action.data;
            newState.total = 0;
            return newState
        case CLEAN:
            newState.total = action.data;
            newState.numbers = action.data;
            return newState
        default:
            return newState;
    }
}


