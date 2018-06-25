import React, { Fragment } from 'react';
import LazyLoad from 'react-lazyload';
import '../css/Style.css';

import Header from './Header';
import Post from './Post';

const Container = (props) => {
  return (
    <Fragment>
      {Header({ name: "Instagram" })}
      <Fragment>
        {props.preload.photos.map((act) =>
          <LazyLoad height={500} once offset={-110} key={act.id}>
            <Post {...act} />
          </LazyLoad>
        )}
      </Fragment>
    </Fragment>
  );
}

export default Container;