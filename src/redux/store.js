import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice';
// import categoriesReducer from './categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;