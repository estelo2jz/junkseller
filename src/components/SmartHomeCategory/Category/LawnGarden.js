import React from 'react';
import Building from '../../Building'; 
import '../SmartHomeStyles/LawnGarden.scss';
import { Link} from 'react-router-dom';

function LawnGarden() {
  return (
    <div className="lawn-garden__container">
      <div className="lawn-garden__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/smarthome">
          <p>
            /smarthome
          </p>
        </Link>
        <p>/lawn&garden</p>
      </div>
      <Building />
    </div>
  )
}

export default LawnGarden
