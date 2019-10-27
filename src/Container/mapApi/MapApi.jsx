/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';
import apiAddress from '../../util/apiPath';

function GMap() {
  const [sensors, setSensors] = useState([
    {
      id: 1, name: 'Batasan Bridge Sensor', lat: 14.679486, lng: 121.109826, path: 'batasan', waterLevel: 0.0,
    },
    {
      id: 2, name: 'Sapang Labo Sensor', lat: 14.692949, lng: 121.125996, path: 'labo', waterLevel: 0.0,
    },
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
            waterLevel: parseFloat(data.waterLevel.$numberDecimal),
          };
          newSensors[index] = updatedSensor;
          setSensors(newSensors);
        }
      });
    }
    fetchSensorData();
  });

  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 14.69872, lng: 121.12606 }}
    >
      {sensors.map((sensor) => (
        <Marker
          key={sensor.id}
          position={{ lat: sensor.lat, lng: sensor.lng }}
          onClick={() => {
            setSelectedSensor(sensor);
            console.log(sensor.id);
          }}
          icon={
            sensor.waterLevel < 2
              ? 'img/cursors/blueLevel.png'
              : 'img/cursors/greenLevel.png'
          }
        />
      ))}
      {selectedSensor && (
        <InfoWindow
          position={{
            lat: selectedSensor.lat,
            lng: selectedSensor.lng,
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
    <div style={{ width: '100vw', height: '90vh', padding: '50px' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
}
