import React from 'react';
import '../PetSuppliesStyles/SmallAnimals.scss';
import Building from '../../Building'; 
import { Link} from 'react-router-dom';
import JumpTo from './JumpTo';


function SmallAnimals() {
  return (
    <div className="small-animals__container">
          <JumpTo 
        path1 = "/pet&supplies/petprofiles"
        link1 = "pet-profiles"
        path2 = "/pet&supplies/catsupplies"
        link2 = "cat-supplies"
        path3 = "/pet&supplies/catfood"
        link3 = "cat-food"
        path4 = "/pet&supplies/dogsupplies"
        link4 = "dog-supplies"
        path5 = "/pet&supplies/dogfood"
        link5 = "dog-food"
        path6 = "/pet&supplies/birds"
        link6 = "birds"
        path7 = "/pet&supplies/fish&aquatic"
        link7 = "fish&aquatic"
      />
      <div className="small-animals__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/pet&supplies">
          <p>
            /pet&supplies
          </p>
        </Link>
        <p>/smallanimals</p>
      </div>
      <Building />
    </div>
  )
}

export default SmallAnimals
