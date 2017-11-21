import React, { Component } from 'react';
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
          {preload.photos.map((act) => <Post key={act.id} {...act} />)}
        </section>
      </div>
    );
  }
}

export default Container;