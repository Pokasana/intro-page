// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div id="nav_bar">
      <NavLink id="nav_link" to="/intro">
        sanae.s
      </NavLink>
      <NavLink id="nav_link" to="/cv">
        cv
      </NavLink>
      <NavLink id="nav_link" to="/projects">
        projects
      </NavLink>
    </div>
  );
}

export default NavBar;