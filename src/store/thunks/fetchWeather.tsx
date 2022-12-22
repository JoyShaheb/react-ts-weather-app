import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiSettings } from "../../api";

export const fetchWeather = createAsyncThunk(
  "weather/thunk",
  async (cityName: string) => {
    return await apiSettings.get(`?q=${cityName}`);
  }
);
