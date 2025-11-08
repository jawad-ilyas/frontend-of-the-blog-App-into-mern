import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios";

const initialState = {
  status: "idle",
  userData: null,
  error: null,
};

// Async thunk for user signup
export const signUpUser = createAsyncThunk(
  "user/signUpUser",
  async (data, { rejectWithValue }) => {
    try {
      console.log("authSlice :: signUpUser :: data ::", data);
      const response = await axiosInstance.post("/v1/auth/signUpUser", data);
      console.log("authSlice :: signUpUser :: response ::", response);
      console.log("authSlice :: signUpUser :: response?.data ::", response?.data);
      return response.data;
    } catch (error) {
      console.log("AuthSlice :: signUpUser :: error", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userData = action.payload;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export default AuthSlice.reducer;
