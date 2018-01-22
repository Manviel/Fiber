import React, { Component, Fragment } from 'react';
import LazyLoad from 'react-lazyload';
import './css/Style.css';

import preload from '../data/data.json';
import Header from './Header';
import Post from './Post';

class Container extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return(
      <Fragment>
        <Header name="Instagram" />
        <Fragment>
          {preload.photos.map((act) =>
            <LazyLoad height={500} once offset={-110} key={act.id}>
              <Post {...act} />
            </LazyLoad>
          )}
        </Fragment>
      </Fragment>
    );
  }
}

export default Container;