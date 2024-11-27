// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return (
    <div relative flex-none>
      <NavLink to="/">
        sanae.s
      </NavLink>
      <NavLink to="/projects">
        projects
      </NavLink>
      <NavLink to="/cv">
        cv
      </NavLink>
    </div>
  );
}

export default NavBar;