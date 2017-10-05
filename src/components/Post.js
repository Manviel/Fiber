import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Style.css';

import Popup from './Popup';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPop: false
    };
  }

  togglePop() {
    this.setState({
      showPop: !this.state.showPop
    });
  }

  render() {
    return(
      <div className="item">
        <article className="line">
          <Link to="/profile">
            <img src={require("../img/profile.jpg")} alt="profile" className="icon" />
            <div className="nick">
              <p className="bold">developer</p>
            </div>
          </Link>
          <img src={require("../img/dot.png")} alt="dot"
            className="dot" onClick={this.togglePop.bind(this)} />
          {this.state.showPop ?
            <Popup
              closePop={this.togglePop.bind(this)} /> : null}
        </article>
        <Link className="picture" to={`/details/${this.props.id}`}>
          <img src={require(`../img/${this.props.src}`)} alt={`${this.props.id}`} id="pic" />
        </Link>
      </div>
    );
  }
}

export default Post;