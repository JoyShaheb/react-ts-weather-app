import { configureStore } from "@reduxjs/toolkit";
import { weatherAPI, useGetDataOfCityQuery } from "./API/weatherAPI";

const store = configureStore({
  reducer: {
    [weatherAPI.reducerPath]: weatherAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, useGetDataOfCityQuery };
