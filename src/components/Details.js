import React, { Fragment } from 'react';

import Header from './Header';
import Post from './Post';
import Description from '../containers/Description';

const Details = ({ select }) => (
  <Fragment>
    {Header({ name: select.description })}
    <div className="flex center container">
      <Post item={select} />
      <Description show={select} />
    </div>
  </Fragment>
);

export default Details;