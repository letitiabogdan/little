import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingForm from "./components/BookingForm";

test("renders the heading static text", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText(/Book a Table/i);
  expect(headingElement).toBeInTheDocument();
});
