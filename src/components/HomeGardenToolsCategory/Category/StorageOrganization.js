import React from 'react';
import { Link } from 'react-router-dom';
import '../HomeGardenStyles/StorageOrganization.scss';
import ComingSoon from '../../ComingSoon';
import Building from '../../Building'; 

function StorageOrganization() {
  return (
    <div className="storage-organization__container">
      <div className="storage-organization__history-path">
        {/* <p>you are in :</p> */}
        <Link to="/home&garden&tools">
          <p>
            /home&garden&tools
          </p>
        </Link>
        <p>/storage&organization</p>
      </div>
      <Building />
      {/* <ComingSoon /> */}
    </div>
  )
}

export default StorageOrganization
