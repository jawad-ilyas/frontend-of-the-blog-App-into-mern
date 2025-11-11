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
      console.log("authSlice :: signUpUser :: response?.data ::", response?.data?.success);
      // console.log("authSlice :: signUpUser :: response?.data ::", response?.data?.data);

      // store accessToken in localStorage
      if (response?.data?.data?.accessToken) {
        localStorage.setItem("accessToken", response.data.data.accessToken);
      }
      return response.data;

    } catch (error) {
      console.log("AuthSlice :: signUpUser :: error", typeof error);
      return error;
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const signInUser = createAsyncThunk(
  "user/signInUser",
  async (data, { rejectWithValue }) => {
    try {
      console.log("authSlice :: signInUser :: data ::", data);
      const response = await axiosInstance.post("/v1/auth/signInUser", data);
      console.log("authSlice :: signInUser :: response ::", response);
      console.log("authSlice :: signInUser :: response?.data ::", response?.data);
      return response.data;
    } catch (error) {
      console.log("AuthSlice :: signInUser :: error", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const googleSignUp = createAsyncThunk(
  'user/googleSignUp',
  async (token, { rejectWithValue }) => {

    try {
      console.log("authSlice :: googleSignUp :: data ::", { token });
      const response = await axiosInstance.post("/v1/auth/googleSignUp", { token })
      return response?.data
    } catch (error) {
      console.log("AuthSlice :: googleSignUp :: error", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
)

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
      })
      .addCase(signInUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userData = action.payload;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      })
      .addCase(googleSignUp.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(googleSignUp.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userData = action.payload;
      })
      .addCase(googleSignUp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export default AuthSlice.reducer;
