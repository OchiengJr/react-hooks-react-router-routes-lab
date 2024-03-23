import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import App from "../components/App";

// Render the App component wrapped in a Router with a custom history object
function renderWithRouter(component, { route = "/" } = {}) {
  const history = createMemoryHistory({ initialEntries: [route] });
  return {
    ...render(<Router history={history}>{component}</Router>),
    history,
  };
}

test("renders the <NavBar /> component", () => {
  renderWithRouter(<App />);
  expect(screen.queryByTestId("navbar")).toBeInTheDocument();
});

test('renders the Home component using the <Route path="/">', () => {
  renderWithRouter(<App />, { route: "/" });
  expect(screen.queryByText(/Home Page/g)).toBeInTheDocument();
});

test('renders the Actors component using the <Route path="/actors">', () => {
  renderWithRouter(<App />, { route: "/actors" });
  expect(screen.queryByText(/Actors Page/g)).toBeInTheDocument();
});

test('renders the Directors component using the <Route path="/directors">', () => {
  renderWithRouter(<App />, { route: "/directors" });
  expect(screen.queryByText(/Directors Page/g)).toBeInTheDocument();
});

test('renders the Movies component using the <Route path="/movies">', () => {
  renderWithRouter(<App />, { route: "/movies" });
  expect(screen.queryByText(/Movies Page/g)).toBeInTheDocument();
});
