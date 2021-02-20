import React from 'react';
import Building from '../../Building'; 
import '../SportsStyles/golf.scss';
import { Link } from 'react-router-dom';

function Golf() {
  return (
  <div className="golf__container">
    <div className="golf__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/sports">
        <p>
          /sports
            </p>
      </Link>
      <p>/golf</p>
    </div>
      <Building />
    </div>
  )
}

export default Golf
