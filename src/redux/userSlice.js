import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const _APIUrlBase =
  "https://user-crud-67c7a-default-rtdb.europe-west1.firebasedatabase.app/";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  return axios.get(`${_APIUrlBase}.json`).then((res) => res.data);
});

export const addUser = createAsyncThunk("users/addUser", async (data) => {
  axios.post(`${_APIUrlBase}.json`, data);
});
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ user, id }) => {
    axios.put(`${_APIUrlBase}${id}.json`, { ...user });
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async ({ id }) => {
    axios.delete(`${_APIUrlBase}${id}.json`);
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    filter: "full_name",
  },

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: {
    [fetchUsers.fulfilled]: (state, { payload }) => {
      state.users = payload;
    },
    [addUser.fulfilled]: (state) => state,
    [updateUser.fulfilled]: (state) => state,
    [deleteUser.fulfilled]: (state) => state,
  },
});
export const { setFilter } = usersSlice.actions;
export default usersSlice.reducer;
