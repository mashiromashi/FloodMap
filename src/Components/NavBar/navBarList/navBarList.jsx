import React from "react";
import NavBarItem from "../navBarItem/navBarItem";

function NavBarList() {
  return (
    <ul>
      <NavBarItem pageName="Home" pageRoute="/" />
      <NavBarItem pageName="Details" pageRoute="/details" />
    </ul>
  );
}

export default NavBarList;
