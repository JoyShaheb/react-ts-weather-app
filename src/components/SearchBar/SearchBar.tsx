import React, { ChangeEvent, KeyboardEvent } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../store";
import { fetchWeather } from "../../store";
import { iStore } from "../../types";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state: iStore) => state.search) || "";

  return (
    <TextField
      id="outlined-basic"
      type="search"
      label="City Name"
      variant="outlined"
      fullWidth
      placeholder="Search for a location"
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        dispatch(setSearch(e.target.value))
      }
      onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
        e.code === "Enter" &&
        search !== "" &&
        dispatch(fetchWeather(search) as any)
      }
    />
  );
};

export default SearchBar;
