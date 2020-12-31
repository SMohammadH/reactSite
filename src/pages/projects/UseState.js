import React, { useState } from 'react';

const UseState = props => {
  const state = useState('');
  return (
    <div className="items">
      <div className="item item-1">
        <div className={state}>
          <h2>UseState Hook</h2>
          <p>
            Clicking on each color below updates the state using UseState
            method.
          </p>
          <p>Click on One Color:</p>
          <button className="btn red" onClick={() => props.setState('red')}>
            I Make it Red
          </button>
          <button className="btn blue" onClick={() => props.setState('blue')}>
            I Make it Blue
          </button>
          <button className="btn green" onClick={() => props.setState('green')}>
            I Make it Green
          </button>
          <button className="btn" onClick={() => props.setState('')}>
            I Clear It!
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseState;
