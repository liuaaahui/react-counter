import {INCREASE, DECREASE} from "../actions/Action";
 
export function ChangeValue(state=0,action){
    switch(action.type){
        case INCREASE:
            return state + action.data;
        case DECREASE:
            return state - action.data;
        default:
            return state;
    }
}
export function ChangeNumber(state=0,action){
    switch(action.type){
        case INCREASE:
            return state + action.data;
        case DECREASE:
            return state - action.data;
        default:
            return state;
    }
}

