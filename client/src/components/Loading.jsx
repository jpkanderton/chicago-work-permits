import React from 'react';
import { SpinningCircles } from '@agney/react-loading';

const Pending = () => {
  return (
    <div id="pending-container">
      <div id="pending-animation-container">
        <SpinningCircles id="spinning-circles"/>
      </div>
    </div>
  )
}

export default Pending;