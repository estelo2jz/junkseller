import React from 'react';
import Building from '../../Building'; 
import '../SportsStyles/AllSports.scss';
import { Link } from 'react-router-dom';

function AllSports() {
  return (
  <div className="all-sports__container">
    <div className="all-sports__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/sports">
        <p>
          /sports
        </p>
      </Link>
      <p>/all-sports&fitness</p>
    </div>
      <Building />
    </div>
  )
}

export default AllSports
