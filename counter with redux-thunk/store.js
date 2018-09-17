import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const initialCount = {
    count:0
}

export const actionTypes = {
    INCREMENT:'INCREMENT',
    DECREMENT:'DECREMENT',
    RESET:'RESET'
}

export const reducer = (state = initialCount,action) =>{
    const count = state.count
    switch(action.type){
        case actionTypes.INCREMENT:
            return {count:count+1}
        case actionTypes.DECREMENT:
            return {count:count-1}
        case actionTypes.RESET:
            return initialCount
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

export const resetCount = () => dispatch =>{
    return dispatch({type:actionTypes.RESET})
}

export default function initializeStore (initialState = initialCount) {
    return createStore(reducer,initialState,composeWithDevTools(applyMiddleware(thunkMiddleware)))
}