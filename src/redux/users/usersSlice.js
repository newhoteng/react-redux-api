import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://randomuser.me/api/?results=5'

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

export const getUsers = createAsyncThunk(
  'users/fetchUserData',
  async (thunkAPI) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data.results);
      return data.results;
      
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong')
    }
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.isLoading = true
    },
    [getUsers.fulfilled]: (state, action) => {
      // console.log(action);
      state.isLoading = false;
      state.users = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      // console.log(action);
      state.isLoading = false;
    },
  },
});

// export const { addBook, removeBook } = usersSlice.actions;
export default usersSlice.reducer;
