import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { iSearch } from "../../types";

const initialState: iSearch = {
  search: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state: iSearch, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    removeSearch: (state: iSearch) => {
      state.search = "";
    },
  },
});

export const { setSearch, removeSearch } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
