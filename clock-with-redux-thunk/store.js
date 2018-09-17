import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const InitialState = {
    lastUpdate: 0,
    light: false
}

export const actionTypes = {
    TICK: 'TICK'
}

// REDUCERS
export const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionTypes.TICK:
            return {...state,lastUpdate:action.ts,light:!!action.light}
      default: return state
    }
}

// ACTIONS
export const startClock = (dispatch,isLight) => {
    return setInterval(() => {
      // Dispatch `TICK` every 1 second
        dispatch({ type: actionTypes.TICK, light: isLight, ts: Date.now() })
    }, 1000)
}

export default function initializeStore (initialState = InitialState) {
    return createStore(reducer,initialState,composeWithDevTools(applyMiddleware(thunkMiddleware)))
}

  
