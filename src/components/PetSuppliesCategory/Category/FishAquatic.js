import React from 'react';
import '../PetSuppliesStyles/FishAquatic.scss';
import Building from '../../Building'; 
import { Link} from 'react-router-dom';
import JumpTo from '../../JumpTo';


function FishAquatic() {
  return (
    <div className="fish-aquatic__container">
          <JumpTo 
        path1 = "/pet&supplies/petprofiles"
        link1 = "/petprofiles"
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
        path7 = "/pet&supplies/birds"
        link7 = "/birds"
      />
      <div className="fish-aquatic__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/pet&supplies">
          <p>
            /pet&supplies
          </p>
        </Link>
        <p>/fishaquaticpets</p>
      </div>
      <Building />
    </div>
  )
}

export default FishAquatic
