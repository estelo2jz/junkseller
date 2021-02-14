import React from 'react';
import { Link } from 'react-router-dom';
import '../HomeGardenStyles/EventsParty.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function EventsParty() {
  return (
    <div className="events-party__container">
      <div className="events-party__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/home&garden&tools">
          <p>
            /home&garden&tools
          </p>
        </Link>
        <p>/evetns&partysupplies</p>
      </div>
      <Building />
      {/* <ComingSoon /> */}
    </div>
  )
}

export default EventsParty
