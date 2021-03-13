import React from 'react';
import '../PetSuppliesStyles/CatSupplies.scss';
import { Link} from 'react-router-dom';
import Building from '../../Building'; 
import JumpTo from './JumpTo';

function CatSupplies() {
  return (
    <div className="cat-supplies__container">
          <JumpTo 
        path1 = "/pet&supplies/petprofiles"
        link1 = "pet-profiles"
        path2 = "/pet&supplies/birds"
        link2 = "birds"
        path3 = "/pet&supplies/catfood"
        link3 = "cat-food"
        path4 = "/pet&supplies/dogsupplies"
        link4 = "dog-supplies"
        path5 = "/pet&supplies/dogfood"
        link5 = "dog-food"
        path6 = "/pet&supplies/smallanimals"
        link6 = "small-animals"
        path7 = "/pet&supplies/fish&aquatic"
        link7 = "fish&aquatic"
      />
      <div className="cat-supplies__history-path">
      <Link to="/pet&supplies">
          <p>
            go back
          </p>
        </Link>
      </div>
      <Building />
    </div>
  )
}

export default CatSupplies
