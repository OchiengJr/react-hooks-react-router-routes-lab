import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

describe("NavBar Component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
  });

  test('renders a <div> with "navbar" class', () => {
    const navbar = screen.getByRole("navigation", { name: "main navigation" });
    expect(navbar).toBeInTheDocument();
  });

  test("renders a Home <NavLink>", async () => {
    const homeNavLink = screen.getByRole("link", { name: /Home/g });
    expect(homeNavLink).toBeInTheDocument();
    expect(homeNavLink.href).toContain("/");
    fireEvent.click(homeNavLink);
    expect(homeNavLink).toHaveClass("active");
  });

  test("renders a Movies <NavLink>", async () => {
    const moviesNavLink = screen.getByRole("link", { name: /Movies/g });
    expect(moviesNavLink).toBeInTheDocument();
    expect(moviesNavLink.href).toContain("/movies");
    fireEvent.click(moviesNavLink);
    expect(moviesNavLink).toHaveClass("active");
  });

  test("renders an Actors <NavLink>", async () => {
    const actorsNavLink = screen.getByRole("link", { name: /Actors/g });
    expect(actorsNavLink).toBeInTheDocument();
    expect(actorsNavLink.href).toContain("/actors");
    fireEvent.click(actorsNavLink);
    expect(actorsNavLink).toHaveClass("active");
  });

  test("renders a Directors <NavLink>", async () => {
    const directorsNavLink = screen.getByRole("link", { name: /Directors/g });
    expect(directorsNavLink).toBeInTheDocument();
    expect(directorsNavLink.href).toContain("/directors");
    fireEvent.click(directorsNavLink);
    expect(directorsNavLink).toHaveClass("active");
  });
});
