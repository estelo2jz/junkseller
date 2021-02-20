import React from 'react';
import '../PetSuppliesStyles/CatSupplies.scss';
import { Link} from 'react-router-dom';
import Building from '../../Building'; 

function CatSupplies() {
  return (
    <div className="cat-supplies__container">
      <div className="cat-supplies__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/pet&supplies">
          <p>
            /pet&supplies
          </p>
        </Link>
        <p>/catsupplies</p>
      </div>
      <Building />
    </div>
  )
}

export default CatSupplies
