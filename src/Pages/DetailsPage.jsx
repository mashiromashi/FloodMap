import React, { Component } from "react";
import Batasan from "../Container/Batasan/Batasan";
import Labo from "../Container/Labo/Labo";

class DetailsPage extends Component {
  state = {};
  render() {
    return (
      <div
        className="container details"
        style={{
          maxHeight: "50vh",
          paddingTop: "40px"
        }}
      >
        <Batasan />
        <Labo />
      </div>
    );
  }
}

export default DetailsPage;
