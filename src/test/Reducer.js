import {TEST} from './ActionTypes';

const testRecuder = (state={status:'test'},action) => {
    switch(action.type){
        case TEST:
            return {...state,status:'jska'}
        default:
            return state
    }
}


export default testRecuder;



































