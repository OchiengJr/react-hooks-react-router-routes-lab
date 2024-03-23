import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Actors from "../components/Actors";
import { actors } from "../data";

// Mock console.error to prevent it from being called during the test
beforeEach(() => {
  jest.spyOn(global.console, "error").mockImplementation(() => {});
});

// Restore the original console.error implementation after each test
afterEach(() => {
  console.error.mockRestore();
});

test("renders without any errors", () => {
  render(<Actors />);
  expect(console.error).not.toHaveBeenCalled();
});

test("renders 'Actors Page' inside of the <h1 />", () => {
  render(<Actors />);
  const h1 = screen.getByRole("heading", { name: /Actors Page/i });
  expect(h1).toBeInTheDocument();
});

test("renders each actor's name", () => {
  render(<Actors />);
  actors.forEach((actor) => {
    expect(screen.getByText(actor.name)).toBeInTheDocument();
  });
});

test("renders a <li /> for each movie", () => {
  render(<Actors />);
  actors.forEach((actor) => {
    actor.movies.forEach((movie) => {
      const listItem = screen.getByText(movie);
      expect(listItem).toBeInTheDocument();
      expect(listItem.tagName).toBe("LI");
    });
  });
});
