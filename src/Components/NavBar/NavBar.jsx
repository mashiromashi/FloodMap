import React from "react";
import NavBarList from "./navBarList/navBarList";

class NavBar {
  state = {};
  render() {
    return (
      <nav className="blue">
        <div className="nav-wrapper">
          <NavBarList />
        </div>
      </nav>
    );
  }
}

export default NavBar;
