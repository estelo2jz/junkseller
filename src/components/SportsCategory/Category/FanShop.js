import React from 'react';
import Building from '../../Building'; 
import '../SportsStyles/FanShop.scss';
import { Link } from 'react-router-dom';

function FanShop() {

  return (
  <div className="fan-shop__container">
    <div className="fan-shop__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/sports">
        <p>
          /sports
            </p>
      </Link>
      <p>/fan-shop</p>
    </div>
      <Building />
    </div>
  )
}

export default FanShop
