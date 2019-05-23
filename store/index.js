import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const exampleInitialState = {
  count: 0
}

export const ADD = 'add';

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case ADD:
      return Object.assign({}, state, {
        count: state.count + parseInt(action.payload)
      })
    default:
      return state
  }
}

// ACTIONS
export const incrementCount = (number) => {
  return { 
    type: ADD ,
    payload: number
  }
}

export function initializeStore (initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}