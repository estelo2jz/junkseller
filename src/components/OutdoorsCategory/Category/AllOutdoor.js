import React from 'react';
// import '../OutdoorsStyles/AllOutdoor.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function AllOutdoor() {
  return (
    <div className="all-outdoor__container">
      <h1>All Outdoor Recreation</h1>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default AllOutdoor;
