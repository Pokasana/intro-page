// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  const navLinks = [{name: 'sanae.s', path: '/'}, {name: 'cv', path: '/cv'}, {name: 'writing', path:'/writing'}];

  return (
    <div className="grid grid-cols-5 text-center">

      {navLinks.map(link => <NavLink className="hover:font-bold" to={link.path}>{link.name}</NavLink>)}

    </div>
  );
}

export default NavBar;