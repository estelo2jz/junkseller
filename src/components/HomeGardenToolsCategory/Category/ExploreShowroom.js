import React from 'react';
// import '../HomeGardenStyles/ExploreShowroom.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function ExploreShowroom() {
  return (
    <div className="explore-showroom__container">
      <p>Explore Showroom</p>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default ExploreShowroom
