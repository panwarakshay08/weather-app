import React from 'react';
import './Spinner.css';

/**
* Loading component
* Renders a loading spinner 
**/

function Spinner() {
  return (
    <div className="spinner">
      <div className="anim"></div>
    </div>
  );
}

export default Spinner;
