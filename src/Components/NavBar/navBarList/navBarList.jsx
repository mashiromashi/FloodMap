import React from "react";
import NavBarItem from "../navBarItem/navBarItem";

const NavBarList = () => {
  return (
    <ul>
      <NavBarItem pageName="Home" pageRoute="/" />
      <NavBarItem pageName="Details" pageRoute="/details" />
    </ul>
  );
}

export default NavBarList;
