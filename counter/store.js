import { createStore } from "redux";

const initialCount = {
    count:0
}

export const actionTypes = {
    INCREMENT:'INCREMENT',
    DECREMENT:'DECREMENT'
}

export const reducer = (state = initialCount,action) =>{
    const count = state.count
    switch(action.type){
        case actionTypes.INCREMENT:
            return {count:count+1}
        case actionTypes.DECREMENT:
            return {count:count-1}
        default: 
            return state
    }
}

export const incrementCount = () => dispatch =>{
    return dispatch({type:actionTypes.INCREMENT})
}

export const decrementCount = () => dispatch =>{
    return dispatch({type:actionTypes.DECREMENT})
}

export default function initializeStore (initialState = initialCount) {
    return createStore(reducer,initialState)
}