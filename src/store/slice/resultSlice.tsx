import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "../thunks/fetchWeather";
import { iResult } from "../../types";

const initialState: iResult = {
  result: {},
  isLoading: false,
  error: false,
};

export const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.result = {};
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchWeather.fulfilled, (state, action: any) => {
      state.error = false;
      state.isLoading = false;
      state.result = action.payload.data;
    });
    builder.addCase(fetchWeather.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export const resultReducer = resultSlice.reducer;
