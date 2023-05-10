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
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.error = 'Something went wrong';
      state.isLoading = false;
    });
  },
});

export default usersSlice.reducer;
