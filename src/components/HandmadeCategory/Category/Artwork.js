import React from 'react';
import { Link } from 'react-router-dom';
import '../HandmadeStyles/ArtWork.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building';

function Artwork() {
  return (
    <div className="art-work__container">
      <div className="art-work__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/handmade">
          <p>
            /handmade
          </p>
        </Link>
        <p>/artwork</p>
      </div>
      <Building />
      <ComingSoon />
    </div>
  )
}

export default Artwork
