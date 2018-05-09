import React, { Fragment } from 'react';

import preload from '../data/data.json';
import Block from './Block';
import Header from './Header';
import './css/Flexbox.css';

const Profile = () => {
  return (
    <Fragment>
      {Header({ name: "developer" })}
      <section className="card">
        <img src={require("../img/profile.jpg")} alt="profile" className="profile" />
        <div className="flex stats">
          <span>posts: <b className="bold">3.950</b></span>
          <span>followers: <b className="bold">8.930</b></span>
          <span>followings: <b className="bold">403</b></span>
        </div>
        <div className="about">
          <span>Your bio goes here...</span>
        </div>
      </section>
      <section className="flex block">
        {preload.photos.map((pic) => <Block key={pic.id} {...pic} />)}
      </section>
    </Fragment>
  );
}

export default Profile;