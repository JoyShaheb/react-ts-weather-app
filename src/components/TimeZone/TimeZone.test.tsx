import React from "react";
import { render, screen } from "@testing-library/react";
import TimeZone from "./TimeZone";

test("TimeZone component returns correct time in correct format", () => {
  render(<>{TimeZone({ input: -7, timezone: 1623536067 })}</>);
  const timeElement = screen.getByText("4 : 22 AM");
  expect(timeElement).toBeInTheDocument();
});
