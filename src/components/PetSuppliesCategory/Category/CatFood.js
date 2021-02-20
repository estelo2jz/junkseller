import React from 'react';
import '../PetSuppliesStyles/CatFood.scss';
import { Link} from 'react-router-dom';
import Building from '../../Building'; 

function CatFood() {
  return (
    <div className="cat-food__container">
      <div className="cat-food__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/pet&supplies">
          <p>
            /pet&supplies
          </p>
        </Link>
        <p>/catfood</p>
      </div>
      <Building />
    </div>
  )
}

export default CatFood
