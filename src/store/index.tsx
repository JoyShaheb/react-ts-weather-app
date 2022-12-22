import { configureStore } from "@reduxjs/toolkit";
import { removeSearch, searchReducer, setSearch } from "./slice/searchSlice";
import { resultReducer } from "./slice/resultSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    result: resultReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export { store, removeSearch, setSearch };
export * from "./thunks/fetchWeather";
