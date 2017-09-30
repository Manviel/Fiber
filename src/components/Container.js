import React, { Component } from 'react';
import './Style.css';

import preload from '../data/data.json';
import Post from './Post';

class Container extends Component {
  render() {
    return(
      <section className="post">
        {preload.photos.map((act) => <Post key={act.id} {...act} />)}
      </section>
    );
  }
}

export default Container;