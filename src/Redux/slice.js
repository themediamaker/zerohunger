import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0, // Set your desired initial state value here
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Your reducer logic here
  },
});

export default counterSlice.reducer;