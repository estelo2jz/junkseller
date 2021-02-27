import React from 'react';
import '../PetSuppliesStyles/PetProfiles.scss';
import { Link} from 'react-router-dom';
import Building from '../../Building'; 
import JumpTo from './JumpTo';


function PetProfiles() {
  return (
    <div className="pet-profiles__container">
          <JumpTo 
        path1 = "/pet&supplies/birds"
        link1 = "birds"
        path2 = "/pet&supplies/catsupplies"
        link2 = "cat-supplies"
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
      <div className="pet-profiles__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/pet&supplies">
          <p>
            /pet&supplies
          </p>
        </Link>
        <p>/petprofiles</p>
      </div>
      <Building />
    </div>
  )
}

export default PetProfiles
