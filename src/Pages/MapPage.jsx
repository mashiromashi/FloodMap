import React, { Component } from 'react';
import Map from '../Container/mapApi/MapApi';

class MapPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="" style={{ display: 'flex', margin: 'auto' }}>
        <div>
          <Map />
        </div>
      </div>
    );
  }
}

export default MapPage;
