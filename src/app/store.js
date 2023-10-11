import { configureStore } from '@reduxjs/toolkit';
import starshipsReducer from '../features/home/listSlice';

const store = configureStore({
  reducer: {
    starships: starshipsReducer,
  },
});

export default store;