import React, { Fragment } from 'react';
import LazyLoad from 'react-lazyload';

import Header from './Header';
import Post from './Post';

import '../css/Style.css';

const Container = ({ preload }) => (
  <Fragment>
    {Header({ name: 'Instagram' })}
    <div className="flex center container">
      {preload.map(item => (
        <LazyLoad height={520} offset={-100} key={item.id}>
          <Post item={item} />
        </LazyLoad>
      ))}
    </div>
  </Fragment>
);

export default Container;
