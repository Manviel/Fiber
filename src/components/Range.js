import React, { Fragment } from 'react';

const Range = (props) => (
  <Fragment>
    <p className="bold">{props.name}: {props.value}</p>
    <input id={props.name}
      min={props.min} max={props.max} step="1"
      onChange={props.onChange}
      type="range" value={props.value} />
  </Fragment>
);

export default Range;