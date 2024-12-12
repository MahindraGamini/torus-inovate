import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UsersState {
  users: User[];
  filteredUsers: User[];
  searchQuery: string;
  loading: boolean;
  error: string | null;
  currentPage: number;
  usersPerPage: number;
}

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  }
);

const initialState: UsersState = {
  users: [],
  filteredUsers: [],
  searchQuery: '',
  loading: false,
  error: null,
  currentPage: 1,
  usersPerPage: 5
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      const userId = action.payload;
      state.users = state.users.filter(user => user.id !== userId);
      state.filteredUsers = state.filteredUsers.filter(user => user.id !== userId);
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      const query = action.payload.toLowerCase();
      state.filteredUsers = state.users.filter(
        user => 
          user.name.toLowerCase().includes(query) || 
          user.email.toLowerCase().includes(query)
      );
      state.currentPage = 1; 
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.filteredUsers = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      });
  }
});

export const { 
  deleteUser, 
  setSearchQuery, 
  setCurrentPage 
} = usersSlice.actions;

export default usersSlice.reducer;
