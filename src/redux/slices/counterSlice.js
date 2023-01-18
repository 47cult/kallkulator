import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  value1: 0,
  result: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    clear: (state, action) => {
      state.value = 0;
      state.value1 = 0;
      state.result = 0;
    },
    percent: (state) => {
      state.result = state.value / 100 * state.value1;
    },
    increment: (state) => {
      state.result = state.value += state.value1;
    },
    decrement: (state) => {
      state.result = state.value -= state.value1;
    },
    x: (state) => {
      state.result = state.value *= state.value1;
    },
    divide: (state) => {
      state.result = state.value /= state.value1;
    },
    incrementByAmount1: (state, action) => {
      state.value = action.payload;
    },
    incrementByAmount2: (state, action) => {
      state.value1 = action.payload;
    },
    
  },
})

export const { clear, percent, increment, decrement, x, divide, incrementByAmount1, incrementByAmount2 } = counterSlice.actions

export default counterSlice.reducer