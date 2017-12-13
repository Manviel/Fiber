import React from 'react';

import '../css/Range.css';

function Range(props) {
  return(
    <div>
      <label>
        <span className="bold">{props.name}</span>
        <div>{props.value}</div>
      </label>
      <input id={props.name}
        min={props.min} max={props.max} step="1"
        onChange={props.onChange} 
        type="range" value={props.value} />
    </div>
  );
}

export default Range;