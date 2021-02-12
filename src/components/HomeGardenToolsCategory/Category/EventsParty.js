import React from 'react';
// import '../HomeGardenStyles/EventsParty.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function EventsParty() {
  return (
    <div className="events-party__container">
      <p>Events & Party Supplies</p>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default EventsParty
