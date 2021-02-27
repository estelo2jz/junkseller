import React from 'react';
import '../PetSuppliesStyles/DogFood.scss';
import { Link} from 'react-router-dom';
import Building from '../../Building'; 
import JumpTo from './JumpTo';


function DogFood() {
  return (
    <div className="dog-food__container">
          <JumpTo 
        path1 = "/pet&supplies/petprofiles"
        link1 = "pet-profiles"
        path2 = "/pet&supplies/catsupplies"
        link2 = "cat-supplies"
        path3 = "/pet&supplies/catfood"
        link3 = "cat-food"
        path4 = "/pet&supplies/dogsupplies"
        link4 = "dog-supplies"
        path5 = "/pet&supplies/birds"
        link5 = "birds"
        path6 = "/pet&supplies/smallanimals"
        link6 = "small-animals"
        path7 = "/pet&supplies/fish&aquatic"
        link7 = "fish&aquatic"
      />
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
