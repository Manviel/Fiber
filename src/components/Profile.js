import React, { Component } from 'react';
import './css/Style.css';
import './css/Flexbox.css';

class Profile extends Component {
  render() {
    return(
        <div className="card">
          <img src={require("../img/profile.jpg")} alt="profile" className="profile" />
          <div className="stats">
            <span>posts: <b className="bold">3.950</b></span>
            <span>followers: <b className="bold">8.930</b></span>
            <span>followings: <b className="bold">403</b></span>
          </div>
          <div className="about">
            <span>Your bio goes here...</span>
          </div>
        </div>
    );
  }
}

export default Profile;