import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

let sensorLocation = [
  { id: 1, name: "Batasan Bridge Sensor", lat: 14.679486, lng: 121.109826 },
  { id: 2, name: "Sapang Labo Sensor", lat: 14.692949, lng: 121.125996 }
];

function GMap() {
  const [selectedSensor, setSelectedSensor] = useState(null);
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 14.69872, lng: 121.12606 }}
    >
      {sensorLocation.map(sensor => (
        <Marker
          key={sensor.id}
          position={{ lat: sensor.lat, lng: sensor.lng }}
          onClick={() => {
            setSelectedSensor(sensor);
          }}
        />
      ))}
      {selectedSensor && (
        <InfoWindow
          position={{
            lat: selectedSensor.lat,
            lng: selectedSensor.lng
          }}
          onCloseClick={() => {
            setSelectedSensor(null);
          }}
        >
          <div>{selectedSensor.name}</div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

//googleMapAPIKey
const apiKey = "AIzaSyDrMZ-7TEja9Skxb8ZGm6PqLE-j9aOMgRs";

const WrappedMap = withScriptjs(withGoogleMap(GMap));

export default function MapApi() {
  return (
    <div style={{ width: "100vw", height: "90vh", padding: "50px" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}
