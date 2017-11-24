import React, { Component } from 'react';
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
      <div>
        <Header name="Instagram" />
        <section className="post">
          {preload.photos.map((act) =>
            <LazyLoad height={500} once offset={-110} key={act.id}>
              <Post {...act} />
            </LazyLoad>
          )}
        </section>
      </div>
    );
  }
}

export default Container;