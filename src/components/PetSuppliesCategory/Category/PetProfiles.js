import React from 'react';
import '../PetSuppliesStyles/PetProfiles.scss';
import { Link} from 'react-router-dom';
import Building from '../../Building'; 
import JumpTo from '../../JumpTo';


function PetProfiles() {
  return (
    <div className="pet-profiles__container">
          <JumpTo 
        path1 = "/pet&supplies/birds"
        link1 = "/birds"
        path2 = "/pet&supplies/catsupplies"
        link2 = "/catsupplies"
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
