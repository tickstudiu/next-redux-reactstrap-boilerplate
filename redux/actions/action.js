import * as Types from '../type';

// ACTIONS
export const serverRenderClock = () => {
  return { type: Types.TICK, light: false, ts: Date.now() }
}
export const startClock = () => {
  return { type: Types.TICK, light: true, ts: Date.now() }
}

export const incrementCount = () => {
  return { type: Types.INCREMENT }
}

export const decrementCount = () => {
  return { type: Types.DECREMENT }
}

export const resetCount = () => {
  return { type: Types.RESET }
}