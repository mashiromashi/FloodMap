import React, { Component } from "react";
import M from "materialize-css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import "materialize-css";
import Content from "./Route/content";
class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Content />
      </BrowserRouter>
    );
  }
}

export default App;
