// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return (
    <div className="grid grid-cols-5 text-center">
      <NavLink className="hover:font-bold" to="/">
        sanae.s
      </NavLink>
      {/* <NavLink className="hover:font-bold" to="/projects">
        projects
      </NavLink> */}
      <NavLink className="hover:font-bold" to="/cv">
        cv
      </NavLink>
      <NavLink className="hover:font-bold" to="/writing">
        writing
      </NavLink>
    </div>
  );
}

export default NavBar;