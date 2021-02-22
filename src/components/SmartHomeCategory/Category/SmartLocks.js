import React from 'react';
import Building from '../../Building'; 
import '../SmartHomeStyles/SmartLocks.scss';
import { Link } from 'react-router-dom';
import JumpTo from '../../JumpTo';

function SmartLocks() {
  return (
  <div className="smart-locks__container">
          <JumpTo 
          path1 = "/smarthome/smarthome"
          link1 = "/smarthome"
          path2 = "/smarthome/securitycameras&systems"
          link2 = "/securitycameras&systems"
          path3 = "/smarthome/detectors&sensors"
          link3 = "/detectors&sensors"
          path4 = "/smarthome/pet"
          link4 = "/pet"
          path5 = "/smarthome/homeentertainment"
          link5 = "/homeentertainment"
          path6 = "/smarthome/vacuum&mops"
          link6 = "/vacuum&mops"
          path7 = "/smarthome/newsmartdevices"
          link7 = "/newsmartdevices"
          path8 = "/smarthome/smarthomelighting"
          link8 = "/smarthomelighting"
          path9 = "/smarthome/kitchen"
          link9 = "/kitchen"
          path10 = "/smarthome/wifi&networking"
          link10 = "/wifi&networking"
          path11 = "/smarthome/voiceassistants&hubs"
          link11 = "/voiceassistants&hubs"
          path12 = "/smarthome/plugs&outlets"
          link12 = "/plugs&outlets"
          path13 = "/smarthome/lawn&garden"
          link13 = "/lawn&garden"
          path14 = "/smarthome/heating&cooling"
          link14 = "/heating&cooling"
        />
    <div className="smart-locks__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/smarthome">
        <p>
          /smarthome
          </p>
      </Link>
      <p>/smartlocks</p>
    </div>
      <Building />
    </div>
  )
}

export default SmartLocks
