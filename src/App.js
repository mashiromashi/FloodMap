import React, { Component } from "react";
import M from "materialize-css";
import "./App.css";

import NavBar from "./Components/NavBar/NavBar";
import "materialize-css";
import Content from "./Route/content";
class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div>
        <header>
          <NavBar />
        </header>
        <Content />
      </div>
    );
  }
}

export default App;
