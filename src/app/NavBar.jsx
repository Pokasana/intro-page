// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div id="nav_bar" className="relative flex-none">
      <NavLink id="nav_link" to="/">
        sanae.s
      </NavLink>
      <NavLink id="nav_link" to="/projects">
        projects
      </NavLink>
      <NavLink id="nav_link" to="/cv">
        cv
      </NavLink>
    </div>
  );
}

export default NavBar;