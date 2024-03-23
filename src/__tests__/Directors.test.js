import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Directors from "../components/Directors";
import { directors } from "../data";

describe("Directors Component", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    console.error.mockRestore();
  });

  test("renders without any errors", () => {
    render(<Directors />);
    expect(console.error).not.toHaveBeenCalled();
  });

  test("renders 'Directors Page' inside of a <h1 />", () => {
    render(<Directors />);
    const h1 = screen.getByRole("heading", { name: /Directors Page/i });
    expect(h1).toBeInTheDocument();
    expect(h1.tagName).toBe("H1");
  });

  test("renders each director's name", () => {
    render(<Directors />);
    directors.forEach((director) => {
      expect(screen.getByText(director.name)).toBeInTheDocument();
    });
  });

  test("renders a <li /> for each movie", () => {
    render(<Directors />);
    directors.forEach((director) => {
      director.movies.forEach((movie) => {
        const li = screen.getByText(movie);
        expect(li).toBeInTheDocument();
        expect(li.tagName).toBe("LI");
      });
    });
  });
});
