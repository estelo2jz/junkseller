import React from 'react';
import '../PetSuppliesStyles/DogFood.scss';
import { Link} from 'react-router-dom';
import Building from '../../Building'; 

function DogFood() {
  return (
    <div className="dog-food__container">
      <div className="dog-food__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/pet&supplies">
          <p>
            /pet&supplies
          </p>
        </Link>
        <p>/dogfood</p>
      </div>
      <Building />
    </div>
  )
}

export default DogFood
