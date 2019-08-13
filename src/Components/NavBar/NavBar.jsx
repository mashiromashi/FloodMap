import React, { Component } from "react";
import NavBarList from "./navBarList/navBarList";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="blue">
        <div class="nav-wrapper">
          <NavBarList />
        </div>
      </nav>
    );
  }
}

export default NavBar;
