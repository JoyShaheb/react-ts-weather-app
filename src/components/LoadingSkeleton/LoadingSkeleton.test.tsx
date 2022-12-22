import React from "react";
import { render, cleanup } from "@testing-library/react";
import LoadingSkeleton from "./LoadingSkeleton";

describe("LoadingSkeleton", () => {
  afterEach(cleanup);

  it("renders correctly", () => {
    const { asFragment } = render(<LoadingSkeleton cards={3} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
