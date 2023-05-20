import React, { useState } from 'react';
import './EventHandlingComponent.css';

const EventHandlingComponent = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  const handleMouseOver = () => {
    console.log('Mouse is over the component');
  };

  return (
    <div>
      <h2>Event Handling Example</h2>
      <p>Counter: {counter}</p>
      <button className="incrementButton" onClick={handleClick}>
        Increment
      </button>
      <div className="hoverDiv" onMouseOver={handleMouseOver}>
        Hover over me
      </div>
    </div>
  );
};

export default EventHandlingComponent;
