import React from 'react';
// import '../OutdoorsStyles/CampingHiking.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function CampingHiking() {
  return (
    <div className="camping-hiking__container">
      <h1>Camping & Hiking</h1>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default CampingHiking
