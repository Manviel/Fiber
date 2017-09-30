import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

import Post from './Post';

class Container extends Component {
  render() {
    return(
      <div>
        <div className="line">
          <Link to="/profile">
            <img src={require("../img/profile.jpg")} alt="profile" className="icon" />
          </Link>
          <div className="nick">
            <p className="bold">developer</p>
          </div>
          <img src={require("../img/dot.png")} alt="dot" className="dot" />
        </div>
      <Post />
      </div>
    );
  }
}

export default Container;