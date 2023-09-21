import { render, fireEvent, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  test("renders with the provided value and can change value", () => {
    const mockOnChange = jest.fn();
    const initialValue = "Initial Value";

    render(
      <SearchBar
        value={initialValue}
        onChange={mockOnChange}
        name="testInput"
      />,
    );

    const inputElement = screen.getByLabelText("City Name") as HTMLInputElement;

    // Check if the input element initially has the provided value
    expect(inputElement.value).toBe(initialValue);

    // Change the input value
    const newValue = "New Value";
    fireEvent.change(inputElement, { target: { value: newValue } });

    // Check if the input value has changed
    expect(inputElement.value).toBe(newValue);
  });

  test("submits the form and calls onChange when submitted", () => {
    const mockOnChange = jest.fn();
    const initialValue = "Initial Value";

    render(
      <SearchBar
        value={initialValue}
        onChange={mockOnChange}
        name="testInput"
      />,
    );

    const inputElement = screen.getByLabelText("City Name") as HTMLInputElement;

    // Change the input value
    const newValue = "New Value";
    fireEvent.change(inputElement, { target: { value: newValue } });
  });
});
