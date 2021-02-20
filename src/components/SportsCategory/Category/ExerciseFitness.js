import React from 'react';
import Building from '../../Building'; 
import '../SportsStyles/ExerciseFitness.scss';
import { Link } from 'react-router-dom';

function ExerciseFitness() {
  return (
  <div className="exercise-fitness__container">
    <div className="exercise-fitness__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/sports">
        <p>
          /sports
            </p>
      </Link>
      <p>/exercise&fitness</p>
    </div>
      <Building />
    </div>
  )
}

export default ExerciseFitness
