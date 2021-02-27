import React from 'react';
import '../PetSuppliesStyles/DogSupplies.scss';
import { Link} from 'react-router-dom';
import Building from '../../Building'; 
import JumpTo from './JumpTo';


function DogSupplies() {
  return (
    <div className="dog-supplies__container">
          <JumpTo 
        path1 = "/pet&supplies/petprofiles"
        link1 = "pet-profiles"
        path2 = "/pet&supplies/catsupplies"
        link2 = "cat-supplies"
        path3 = "/pet&supplies/catfood"
        link3 = "cat-food"
        path4 = "/pet&supplies/birds"
        link4 = "birds"
        path5 = "/pet&supplies/dogfood"
        link5 = "dog-food"
        path6 = "/pet&supplies/smallanimals"
        link6 = "small-animals"
        path7 = "/pet&supplies/fish&aquatic"
        link7 = "fish&aquatic"
      />
      <div className="dog-supplies__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/pet&supplies">
          <p>
            /pet&supplies
          </p>
        </Link>
        <p>/dogsupplies</p>
      </div>
      <Building />
    </div>
  )
}

export default DogSupplies
