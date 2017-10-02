import React, { Component } from 'react';
import './css/Style.css';

import preload from '../data/data.json';
import Post from './Post';

class Container extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return(
      <section className="post">
        {preload.photos.map((act) => <Post key={act.id} {...act} />)}
      </section>
    );
  }
}

export default Container;