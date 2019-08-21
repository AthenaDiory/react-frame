import {TEST} from './ActionTypes.js';

const actionsExam = (val) => ({
    type:TEST,
    status:val
})

export const testFun = (val) => {
    return (dispatch) => {
        dispatch(actionsExam(val))
    }
}




