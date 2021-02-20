import React from 'react';
import Building from '../../Building'; 
import '../ToysKidsBabyStyle/BabyRegistry.scss';
import { Link } from 'react-router-dom';

function BabyRegistry() {
  return (
  <div className="baby-registry__container">
    <div className="baby-registry__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/toys&kids&baby">
        <p>
          /toys&kids&baby
            </p>
      </Link>
      <p>/babyregistry</p>
    </div>
      <Building />
    </div>
  )
}

export default BabyRegistry
