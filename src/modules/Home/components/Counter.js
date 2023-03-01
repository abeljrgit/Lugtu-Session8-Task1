import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../../../slices/counterSlice';
import { Box, Button, Typography } from '@mui/material';

export const Counter = () => {
  const counter = useSelector((state) => {
    return state.counter;
  });
  const dispatch = useDispatch();

  console.log(counter);
  return (
    <Box>
      <Typography>This is home... {`${counter.value}`}</Typography>
      <Button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </Button>
      <Button
        onClick={() => {
          dispatch(incrementByAmount(8));
        }}
      >
        Increment By 8
      </Button>
      <Button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </Button>
    </Box>
  );
};
