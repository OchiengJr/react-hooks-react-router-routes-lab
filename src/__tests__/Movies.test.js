import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Movies from "../components/Movies";
import { movies } from "../data";

describe("Movies Component", () => {
  test("renders without any errors", () => {
    const errorSpy = jest.spyOn(global.console, "error");

    render(<Movies />);

    expect(errorSpy).not.toHaveBeenCalled();

    errorSpy.mockRestore();
  });

  test("renders 'Movies Page' inside of a <h1 />", () => {
    render(<Movies />);
    const h1 = screen.getByRole("heading", { name: /Movies Page/i });
    expect(h1).toBeInTheDocument();
    expect(h1.tagName).toBe("H1");
  });

  test("renders each movie's title and time", () => {
    render(<Movies />);
    for (const movie of movies) {
      expect(
        screen.getByText(movie.title, { exact: false })
      ).toBeInTheDocument();
      expect(
        screen.getByText(movie.time.toString(), { exact: false })
      ).toBeInTheDocument();
    }
  });

  test("renders a <li /> for each genre", () => {
    render(<Movies />);
    for (const movie of movies) {
      for (const genre of movie.genres) {
        const li = screen.getByText(genre, { exact: false });
        expect(li).toBeInTheDocument();
        expect(li.tagName).toBe("LI");
      }
    }
  });
});
