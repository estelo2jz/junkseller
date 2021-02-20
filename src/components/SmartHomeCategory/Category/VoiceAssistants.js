import React from 'react';
import Building from '../../Building'; 
import '../SmartHomeStyles/VoiceAssistants.scss';
import { Link } from 'react-router-dom';

function VoiceAssistants() {
  return (
  <div className="voice-assistants__container">
    <div className="voice-assistants__history-path">
      {/* <p>you are in :</p> */}
      <Link to="/smarthome">
        <p>
          /smarthome
          </p>
      </Link>
      <p>/voiceassistants&hubs</p>
    </div>
      <Building />
    </div>
  )
}

export default VoiceAssistants
