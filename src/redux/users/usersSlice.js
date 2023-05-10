import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [{first: 'Harriet', last: 'Oteng'}],
  isLoading: false,
  error: undefined,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // addBook: (state, action) => {
    //   state.push(action.payload);
    // },
    // removeBook: (state, action) => {
    //   const itemId = action.payload;
    //   const remainingBooks = state.filter((book) => book.item_id !== itemId);
    //   state.splice(0, state.length, ...remainingBooks);
    // },
  },
  extraReducers: {},
});

// export const { addBook, removeBook } = usersSlice.actions;
export default usersSlice.reducer;
