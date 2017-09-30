import React, { Component } from 'react';
import './Style.css';

class Post extends Component {
  render() {
    return(
      <div className="picture">
        <img src={require("../img/pic.jpg")} alt="pic" id="pic" />
      </div>
    );
  }
}

export default Post;