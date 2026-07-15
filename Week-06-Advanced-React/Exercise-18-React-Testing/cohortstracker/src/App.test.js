import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Cohort Tracker Tests", () => {

  test("renders heading", () => {
    render(<App />);
    expect(screen.getByText("Cohort Tracker")).toBeInTheDocument();
  });

  test("renders Java FSE", () => {
    render(<App />);
    expect(screen.getByText("Java FSE")).toBeInTheDocument();
  });

  test("renders React Training", () => {
    render(<App />);
    expect(screen.getByText("React Training")).toBeInTheDocument();
  });

});