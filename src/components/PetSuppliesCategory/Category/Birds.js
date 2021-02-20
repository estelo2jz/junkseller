import React from 'react';
import Building from '../../Building'; 
import '../PetSuppliesStyles/Birds.scss';
import { Link} from 'react-router-dom';

function Birds() {
  return (
    <div className="birds__container">
      <div className="birds__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/pet&supplies">
          <p>
            /pet&supplies
          </p>
        </Link>
        <p>/birds</p>
      </div>
      <Building />
    </div>
  )
}

export default Birds
