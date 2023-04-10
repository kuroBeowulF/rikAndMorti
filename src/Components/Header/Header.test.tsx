import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders a text", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});
