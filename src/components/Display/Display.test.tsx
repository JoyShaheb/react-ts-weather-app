import { render } from "@testing-library/react";
import Display from "./Display";
import { sampleData } from "../sampleData";
import { iWeatherData } from "../../types/interface";

describe("Display component", () => {
  it("should match snapshot", () => {
    const { container } = render(<Display {...(sampleData as iWeatherData)} />);
    expect(container).toMatchSnapshot();
  });
});
