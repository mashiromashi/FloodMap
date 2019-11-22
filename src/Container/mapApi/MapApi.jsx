/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { apiAddress } from "../../util/ApiAddresses";

function GMap() {
  const [sensors, setSensors] = useState([
    {
      id: 1,
      name: "Batasan Bridge Sensor",
      lat: 14.679486,
      lng: 121.109826,
      path: "batasan",
      waterLevel: 0.0
    },
    {
      id: 2,
      name: "Sapang Labo Sensor",
      lat: 14.692949,
      lng: 121.125996,
      path: "labo",
      waterLevel: 0.0
    }
  ]);
  const [selectedSensor, setSelectedSensor] = useState(null);

  useEffect(() => {
    // eslint: sensor was never used
    // async function fetchSensorData(sensor) {

    async function fetchSensorData() {
      sensors.forEach(async (sensor, index) => {
        const res = await fetch(`${apiAddress}/${sensor.path}/getlatest`);
        const data = await res.json();
        if (data && data.waterLevel) {
          const newSensors = [...sensors];
          const updatedSensor = {
            ...sensor,
            waterLevel: parseFloat(data.waterLevel.$numberDecimal)
          };
          newSensors[index] = updatedSensor;
          setSensors(newSensors);
        }
      });
    }
    const timeout = setTimeout(fetchSensorData, 5000);
    return () => clearTimeout(timeout, 5500);
  });

  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 14.69872, lng: 121.12606 }}
    >
      {sensors.map(sensor => (
        <Marker
          key={sensor.id}
          position={{ lat: sensor.lat, lng: sensor.lng }}
          onClick={() => {
            setSelectedSensor(sensor);
          }}
          icon={
            // this is fine
            sensor.waterLevel <= 5
              ? "img/cursors/greenLevel.png"
              : // a little bit not okay
              sensor.waterLevel <= 10
              ? "img/cursors/yellowLevel.png"
              : // the whole street is swimming pool
              sensor.waterLevel <= 20
              ? "img/cursors/orangeLevel.png"
              : // Our homes are gone just like my hopes and dreams
              sensor.waterLevel <= 30
              ? "img/cursors/redLevel.png"
              : // basically atlantis
              sensor.waterLevel >= 50
              ? "img/cursor/blackLevel.png"
              : null
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
            <p>
              {selectedSensor.name} : {selectedSensor.waterLevel} mm
            </p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

// googleMapAPIKey
const apiKey = process.env.REACT_APP_MAP_API_KEY;

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
      <p className="flow-text center-align">
        Green = 0-5m Yellow = 5-10m Red = >10m
      </p>
    </div>
  );
}
