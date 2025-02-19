// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return (
    <div className="relative flex-none grid gap-1 grid-cols-5 text-center">
      <NavLink to="/">
        sanae.s
      </NavLink>
      {/* <NavLink to="/projects">
        projects
      </NavLink> */}
      <NavLink to="/cv">
        cv
      </NavLink>
      <NavLink to="/writing">
        writing
      </NavLink>
    </div>
  );
}

export default NavBar;