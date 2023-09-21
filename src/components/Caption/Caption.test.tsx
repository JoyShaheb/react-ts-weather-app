import { render, screen } from "@testing-library/react";
import Caption from "./Caption";
import { iWeatherData } from "../../types/interface";
import { sampleData } from "../sampleData";

describe("Caption", () => {
  test("displays correct location name and country code when name and sys props are provided", () => {
    render(<Caption {...(sampleData as iWeatherData)} />);
    expect(screen.getByText("Dhaka, BD")).toBeInTheDocument();
  });
});
