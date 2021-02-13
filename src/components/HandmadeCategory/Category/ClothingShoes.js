import React from 'react';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/ClothingShoes.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';

function ClothingShoes() {
  return (
    <div className="clothing-shoes__container">
      <div className="clothing-shoes__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/clothing&shoes</p>
      </div>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default ClothingShoes
