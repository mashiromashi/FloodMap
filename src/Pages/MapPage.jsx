import React, { Component } from "react";
import Map from "../Container/mapApi/MapApi";
// import MapTables from "../Container/MapTables/MapTables";

class MapPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="" style={{ display: "flex", margin: "auto" }}>
        <div style={{}}>
          <Map />
        </div>
        {/* <div style={{ paddingTop: "80px", paddingLeft: "50px" }}>
          <MapTables />
        </div> */}
      </div>
    );
  }
}

export default MapPage;
