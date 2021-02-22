import React from 'react';
import '../PetSuppliesStyles/CatSupplies.scss';
import { Link} from 'react-router-dom';
import Building from '../../Building'; 
import JumpTo from '../../JumpTo';

function CatSupplies() {
  return (
    <div className="cat-supplies__container">
          <JumpTo 
        path1 = "/pet&supplies/petprofiles"
        link1 = "/petprofiles"
        path2 = "/pet&supplies/birds"
        link2 = "/birds"
        path3 = "/pet&supplies/catfood"
        link3 = "/catfood"
        path4 = "/pet&supplies/dogsupplies"
        link4 = "/dogsupplies"
        path5 = "/pet&supplies/dogfood"
        link5 = "/dogfood"
        path6 = "/pet&supplies/smallanimals"
        link6 = "/smallanimals"
        path7 = "/pet&supplies/fish&aquatic"
        link7 = "/fish&aquatic"
      />
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
