import React from 'react';
import Building from '../../Building'; 
import '../PetSuppliesStyles/Birds.scss';
import { Link} from 'react-router-dom';
import JumpTo from './JumpTo';

function Birds() {
  return (
    <div className="birds__container">
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
        path6 = "/pet&supplies/smallanimals"
        link6 = "small-animals"
        path7 = "/pet&supplies/fish&aquatic"
        link7 = "fish&aquatic"
      />
      <div className="birds__history-path">
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

export default Birds
