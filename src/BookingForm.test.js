import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { fetchData } from "./api";

// Mock the API functions
jest.mock("./api", () => ({
  fetchData: jest.fn(),
}));

const mockSubmitForm = jest.fn();

describe("BookingForm Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders the form with initial fields", () => {
    render(<BookingForm submitForm={mockSubmitForm} />);

    // Check if the form fields are rendered
    expect(screen.getByLabelText(/Number of Guests:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion:/i)).toBeInTheDocument();
    expect(screen.getByText(/Book Table/i)).toBeInTheDocument();
  });

  test("fetches available times on initial render", async () => {
    // Mock the fetchData API to return mock times
    fetchData.mockResolvedValue(["18:00", "19:00", "20:00"]);

    render(<BookingForm submitForm={mockSubmitForm} />);

    // Wait for the API call to complete
    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledTimes(1);
    });
  });

  test("submits the form with valid data", async () => {
    // Mock the fetchData API to return mock times
    fetchData.mockResolvedValue(["18:00", "19:00", "20:00"]);

    render(<BookingForm submitForm={mockSubmitForm} />);

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/Date:/i), {
      target: { value: "2025-03-26" },
    });
    fireEvent.change(screen.getByLabelText(/Time:/i), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText(/Number of Guests:/i), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText(/Occasion:/i), {
      target: { value: "birthday" },
    });

    // Submit the form
    fireEvent.click(screen.getByText(/Book Table/i));

    // Wait for the submitForm function to be called
    await waitFor(() => {
      expect(mockSubmitForm).toHaveBeenCalledWith({
        date: "2025-03-26",
        time: "18:00",
        guests: 4,
        occasion: "birthday",
      });
    });
  });

  test("displays validation errors for invalid inputs", async () => {
    render(<BookingForm submitForm={mockSubmitForm} />);

    // Submit the form without filling it out
    fireEvent.click(screen.getByText(/Book Table/i));

    // Check for validation errors
    expect(await screen.findByText(/Date is required/i)).toBeInTheDocument();
  });
});
