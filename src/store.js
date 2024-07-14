import { configureStore } from '@reduxjs/toolkit';
import namesReducer from './features/namesSlice';

const store = configureStore({
  reducer: {
    names: namesReducer,
  },
});

export default store;
