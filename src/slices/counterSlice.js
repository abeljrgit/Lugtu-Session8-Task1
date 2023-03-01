import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counterTESTNAME',
  initialState: {
    value: 88,
  },
  reducers: {
    increment: (state, action) => {
      state.value += 3;
    },
    decrement: (state, action) => {
      state.value -= 3;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
