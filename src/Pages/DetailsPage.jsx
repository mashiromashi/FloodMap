import React from 'react';
import Batasan from '../Container/Batasan/Batasan';
import Labo from '../Container/Labo/Labo';

const DetailsPage = () => (
  <div
    className="container details"
    style={{
      maxHeight: '50vh',
      paddingTop: '40px',
    }}
  >
    <Batasan />
    <Labo />
  </div>
);

export default DetailsPage;
