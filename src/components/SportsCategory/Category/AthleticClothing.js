import React from 'react';
import Building from '../../Building'; 
import '../SportsStyles/AthleticClothing.scss';
import { Link } from 'react-router-dom';

function AthleticClothing() {
  return (
  <div className="athletic-clothing__container">
    <div className="athletic-clothing__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/sports">
        <p>
          /sports
            </p>
      </Link>
      <p>/athletic-clothing</p>
    </div>
      <Building />
    </div>
  )
}

export default AthleticClothing
