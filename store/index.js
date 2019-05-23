import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';

const exampleInitialState = {
  count: 0,
  name: ''
}

export const ADD = 'add';
export const FETCH = 'fetch';

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case ADD:
      return Object.assign({}, state, {
        count: state.count + parseInt(action.payload)
      })
    case FETCH:
      return Object.assign({}, state, {
        name: action.payload
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

export const fetchGithub = () => {
  const res = axios.get('https://api.github.com/users/wwarodom')
  return { 
    type: FETCH ,
    payload: res.name
  }
}

export function initializeStore (initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}