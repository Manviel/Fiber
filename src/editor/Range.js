import React, { Fragment } from 'react';

import '../css/Range.css';

function Range(props) {
  return (
    <Fragment>
      <div>
        <span className="bold">{props.name}: </span>
        <span>{props.value}</span>
      </div>
      <input id={props.name}
        min={props.min} max={props.max} step="1"
        onChange={props.onChange}
        type="range" value={props.value} />
    </Fragment>
  );
}

export default Range;