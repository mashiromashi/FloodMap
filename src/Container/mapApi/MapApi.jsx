import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import apiAddress from "../../util/apiPath";

let sensorLocation = [
  { id: 1, name: "Batasan Bridge Sensor", lat: 14.679486, lng: 121.109826 },
  { id: 2, name: "Sapang Labo Sensor", lat: 14.692949, lng: 121.125996 }
];

let latestWaterInfo = [];

function getBatasan() {
  fetch(`${apiAddress}/batasan/getlatest`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      latestWaterInfo.push(parseFloat(data.waterLevel.$numberDecimal));
    });
}

function getLabo() {
  fetch(`${apiAddress}/labo/getlatest`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      latestWaterInfo.push(parseFloat(data.waterLevel.$numberDecimal));
    });
}
let cursorColorBatasan = "";
let cursorColorLabo = "";

function colourChangeBatasan() {
  if (latestWaterInfo[0] > 2)
    return (cursorColorBatasan = "img/cursors/redLevel.png");
  else {
    return (cursorColorBatasan = "img/cursors/greenLevel.png");
  }
}

function colourChangeLabo() {
  if (latestWaterInfo[1] > 2) {
    return (cursorColorLabo = "img/cursors/redLevel.png");
  } else if (latestWaterInfo[1] < 2) {
    return (cursorColorLabo = "img/cursors/blackLevel.png");
  } else {
    return (cursorColorLabo = "img/cursors/greenLevel.png");
  }
}

function GMap() {
  const [selectedSensor, setSelectedSensor] = useState(null);
  function colorChange() {
    if (latestWaterInfo[selectedSensor.id] > 2) {
      return (cursorColorLabo = "img/cursors/redLevel.png");
    } else if (latestWaterInfo[selectedSensor.id] < 2) {
      return (cursorColorLabo = "img/cursors/blackLevel.png");
    } else {
      return (cursorColorLabo = "img/cursors/greenLevel.png");
    }
  }
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 14.69872, lng: 121.12606 }}
    >
      {/* <Marker
        key={sensorLocation[1].id}
        position={{ lat: sensorLocation[1].lat, lng: sensorLocation[1].lng }}
        onClick={() => {
          setSelectedSensor(sensorLocation[1]);
          console.log(selectedSensor);
        }}
        icon={colourChangeBatasan()}
      />
      {selectedSensor && (
        <InfoWindow
          position={{ lat: sensorLocation[1].lat, lng: sensorLocation[1].lng }}
          onCloseClick={() => {
            setSelectedSensor(null);
          }}
        >
          <div>
            {sensorLocation[1].name} : {latestWaterInfo[1]} mm
          </div>
        </InfoWindow>
      )}

      <Marker
        key={sensorLocation[0].id}
        position={{ lat: sensorLocation[0].lat, lng: sensorLocation[0].lng }}
        onClick={() => {
          setSelectedSensor(sensorLocation[0]);
          console.log(selectedSensor);
        }}
        icon={colourChangeLabo()}
      />
      {selectedSensor && (
        <InfoWindow
          position={{ lat: sensorLocation[0].lat, lng: sensorLocation[0].lng }}
          onCloseClick={() => {
            setSelectedSensor(null);
          }}
        >
          <div>
            {sensorLocation[0].name} : {latestWaterInfo[0]} mm
          </div>
        </InfoWindow>
      )} */}
      {sensorLocation.map(sensor => (
        <Marker
          key={sensor.id}
          position={{ lat: sensor.lat, lng: sensor.lng }}
          onClick={() => {
            setSelectedSensor(sensor);
            console.log(sensor.id);
          }}
          icon={
            latestWaterInfo[0] < 4
              ? "img/cursors/blueLevel.png"
              : "img/cursors/blackLevel.png"
          }
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
          <div>
            {selectedSensor.id === 1 ? (
              <p>
                {selectedSensor.name} : {latestWaterInfo[0]} mm
              </p>
            ) : (
              <p>
                {selectedSensor.name} : {latestWaterInfo[1]} mm
              </p>
            )}
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

//googleMapAPIKey
const apiKey = "AIzaSyDrMZ-7TEja9Skxb8ZGm6PqLE-j9aOMgRs";

const WrappedMap = withScriptjs(withGoogleMap(GMap));

export default function MapApi() {
  getBatasan();
  getLabo();
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
