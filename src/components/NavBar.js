import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  const space = {margin: "5px"}

  return (
    <div className="navbar">

      {/* Movies */}
      <NavLink
        exact
        to="/movies"
        activeStyle= {{background: "darkblue"}}
        style= {space}
      >
        Movies
      </NavLink>

      {/* Directors */}
      <NavLink
        exact
        to="/directors"
        activeStyle= {{background: "darkblue"}}
        style= {space}
      >
        Directors
      </NavLink>

      {/* Actors */}
      <NavLink
        exact
        to="/actors"
        activeStyle= {{background: "darkblue"}}
        style= {space}
      >
        Actors
      </NavLink>

      <NavLink
        exact
        to="/"
        activeStyle= {{background: "darkblue"}}
      >
        Home
      </NavLink>
    </div>
  );
}

export default NavBar;
