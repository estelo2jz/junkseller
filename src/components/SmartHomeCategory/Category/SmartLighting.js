import React from 'react';
import Building from '../../Building'; 
import '../SmartHomeStyles/SmartLighting.scss';
import { Link } from 'react-router-dom';
import JumpTo from './JumpTo';

function SmartLighting() {
  return (
  <div className="smart-lighting__container">
          <JumpTo 
          path1 = "/smarthome/smarthome"
          link1 = "smart-home"
          path2 = "/smarthome/securitycameras&systems"
          link2 = "security-cameras&systems"
          path3 = "/smarthome/smartlocks&entry"
          link3 = "smart-locks&entry"
          path4 = "/smarthome/pet"
          link4 = "pet"
          path5 = "/smarthome/homeentertainment"
          link5 = "home-entertainment"
          path6 = "/smarthome/vacuum&mops"
          link6 = "vacuum&mops"
          path7 = "/smarthome/newsmartdevices"
          link7 = "newsmartdevices"
          path8 = "/smarthome/detectors&sensors"
          link8 = "detectors&sensors"
          path9 = "/smarthome/kitchen"
          link9 = "kitchen"
          path10 = "/smarthome/wifi&networking"
          link10 = "wifi&networking"
          path11 = "/smarthome/voiceassistants&hubs"
          link11 = "voice-assistants&hubs"
          path12 = "/smarthome/plugs&outlets"
          link12 = "plugs&outlets"
          path13 = "/smarthome/lawn&garden"
          link13 = "lawn&garden"
          path14 = "/smarthome/heating&cooling"
          link14 = "heating&cooling"
        />
    <div className="smart-lighting__history-path">
    <Link to="/smarthome">
          <p>
            go back
          </p>
        </Link>
    </div>
      <Building />
    </div>
  )
}

export default SmartLighting
