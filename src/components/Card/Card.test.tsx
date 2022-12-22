import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card component", () => {
  const sampleData = {
    icon: <span>ICON</span>,
    label: "Label",
    data: "Data",
    unit: "Unit",
  };
  it("should render the correct icon, label, data, and unit", () => {
    // Arrange
    render(<Card {...sampleData} />);

    // Act
    const iconElement = screen.getByText(/ICON/i);
    const labelElement = screen.getByText(/Label/i);
    const dataElement = screen.getByText(/Data/i);
    const unitElement = screen.getByText(/Unit/i);

    // Assert
    expect(iconElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
    expect(dataElement).toBeInTheDocument();
    expect(unitElement).toBeInTheDocument();
  });

  it("snapshot test of Card component", () => {
    const { container } = render(<Card {...sampleData} />);
    expect(container).toMatchSnapshot();
  });
});
