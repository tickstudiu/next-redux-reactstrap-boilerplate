import * as Types from '../type';

const initialState = {
  lastUpdate: 0,
  light: false,
  count: 0
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      })
    case Types.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    case Types.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      })
    case Types.RESET:
      return Object.assign({}, state, {
        count: initialState.count
      })
    default:
      return state
  }
}