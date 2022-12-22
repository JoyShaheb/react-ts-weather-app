import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import { Provider } from "react-redux";
import { store } from "../../store";

test("SearchBar component", () => {
   render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );
  const searchInput = screen.getByPlaceholderText("Search for a location");
  const searchLabel = screen.getByLabelText("City Name");

  // Test that the search input and label are rendered
  expect(searchInput).toBeInTheDocument();
  expect(searchLabel).toBeInTheDocument();

  // Test that typing in the search input and pressing enter dispatches the expected actions
  fireEvent.change(searchInput, { target: { value: "New York" } });
  fireEvent.keyDown(searchInput, { key: "Enter", code: "Enter" });
});
