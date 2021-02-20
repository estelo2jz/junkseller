import React from 'react';
import Building from '../../Building'; 
import '../ToysKidsBabyStyle/VideoGameKids.scss';
import { Link } from 'react-router-dom';

function VideoGameKids() {
  return (
  <div className="video-game-kids__container">
    <div className="video-game-kids__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/toys&kids&baby">
        <p>
          /toys&kids&baby
            </p>
      </Link>
      <p>/videogameskids</p>
    </div>
      <Building />
    </div>
  )
}

export default VideoGameKids
