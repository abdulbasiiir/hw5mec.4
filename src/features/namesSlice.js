import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  names: JSON.parse(localStorage.getItem('names')) || [],
};

const namesSlice = createSlice({
  name: 'names',
  initialState,
  reducers: {
    addName: (state, action) => {
      state.names.push(action.payload);
      localStorage.setItem('names', JSON.stringify(state.names));
    },
    deleteName: (state, action) => {
      state.names.splice(action.payload, 1);
      localStorage.setItem('names', JSON.stringify(state.names));
    },
  },
});

export const { addName, deleteName } = namesSlice.actions;

export const selectNames = (state) => state.names.names;

export default namesSlice.reducer;
