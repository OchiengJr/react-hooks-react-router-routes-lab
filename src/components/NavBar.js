import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const linkStyle = {
    margin: "5px",
    textDecoration: "none",
    color: "black",
  };

  const activeLinkStyle = {
    ...linkStyle,
    background: "darkblue",
    color: "white",
  };

  return (
    <div className="navbar">
      {/* Movies */}
      <NavLink exact to="/movies" style={linkStyle} activeStyle={activeLinkStyle}>
        Movies
      </NavLink>

      {/* Directors */}
      <NavLink exact to="/directors" style={linkStyle} activeStyle={activeLinkStyle}>
        Directors
      </NavLink>

      {/* Actors */}
      <NavLink exact to="/actors" style={linkStyle} activeStyle={activeLinkStyle}>
        Actors
      </NavLink>

      {/* Home */}
      <NavLink exact to="/" style={linkStyle} activeStyle={activeLinkStyle}>
        Home
      </NavLink>
    </div>
  );
}

export default NavBar;
