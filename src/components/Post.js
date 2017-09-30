import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

class Post extends Component {
  render() {
    return(
      <div className="item">
        <article className="line">
          <Link to="/profile">
            <img src={require("../img/profile.jpg")} alt="profile" className="icon" />
          </Link>
          <div className="nick">
            <p className="bold">developer</p>
          </div>
          <img src={require("../img/dot.png")} alt="dot" className="dot" />
        </article>
        <article className="picture">
          <img src={require(`../img/${this.props.src}`)} alt={`${this.props.id}`} id="pic" />
        </article>
      </div>
    );
  }
}

export default Post;