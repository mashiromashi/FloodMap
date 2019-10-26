import React from "react";
import Map from "../Container/mapApi/MapApi";
class MapPage {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='' style={{ display: "flex", margin: "auto" }}>
        <div>
          <Map />
        </div>
      </div>
    );
  }
}

export default MapPage;
