import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Requesthave 3 cases
// Start
// Success
// Error

export const addUser = createAsyncThunk("users/add", async (user) => {
  const res = axios.post("http://localhost:5000/api/users", user);
  return res.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {
      name: "",
      email: "",
    },

    loading: null,
    error: false,
  },
  reducers: {
    // addUser: (state, action) => {
    //   state.name = action.payload.name;
    //   state.email = action.payload.email;
    // },
    // Request: Start
    startUser: (state) => {
      state.loading = true;
    },
    // Success
    successUser: (state, action) => {
      state.userData = action.payload;
      state.loading = null;
    },
    // Error
    errorUser: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
  extraReducers: {
    [addUser.pending]: (state) => {
      state.loading = true;
    },
    [addUser.fulfilled]: (state, action) => {
      state.userData = action.payload;
      state.loading = false;
    },
    [addUser.rejected]: (state, action) => {
      state.userData = action.payload;
      state.loading = false;
    },
  },
});

export const { startUser, successUser, errorUser } = userSlice.actions;

export default userSlice.reducer;
