import React from 'react';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/AllHandmade.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';

function AllHandmade() {
  return (
    <div className="all-handmade__container">
      <div className="all-handmade__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/allhandmade</p>
      </div>
      <Building />
      {/* <ComingSoon /> */}
    </div>
  )
}

export default AllHandmade
