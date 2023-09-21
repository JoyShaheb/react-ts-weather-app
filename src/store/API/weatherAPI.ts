import {
  createApi,
  fetchBaseQuery,
  FetchArgs,
} from "@reduxjs/toolkit/query/react";
import { iWeatherData } from "../../types/interface";

export const weatherAPI = createApi({
  reducerPath: "weatherAPI",
  tagTypes: ["weatherData"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_WEATHER_APP_BASE_URL,
  }),
  endpoints: (builder) => ({
    getDataOfCity: builder.query<iWeatherData, string | FetchArgs>({
      query: (cityName: string) => {
        if (cityName.trim() === "") {
          return "";
        }
        return `?appid=${process.env.REACT_APP_WEATHER_APP_API_KEY}&q=${cityName}`;
      },
      providesTags: ["weatherData"],
    }),
  }),
});

export const { useGetDataOfCityQuery } = weatherAPI;
