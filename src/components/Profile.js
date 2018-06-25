import React, { Fragment } from 'react';

import Block from './Block';
import Header from './Header';
import Subscribe from './Subscribe';

import '../css/Flexbox.css';

const Profile = (props) => {
  return (
    <Fragment>
      {Header({ name: "developer" })}
      <section className="card bot flex">
        <img src={require("../img/profile.jpg")} alt="profile" className="profile" />
        <div className="flex about block">
          <span>posts: <b className="bold">3.950</b></span>
          <span>followers: <b className="bold">8.930</b></span>
          <span>followings: <b className="bold">403</b></span>
          <span>Your bio goes here...</span>
          <Subscribe />
        </div>
      </section>
      <section className="flex block">
        {props.preload.photos.map(pic => <Block key={pic.id} {...pic} />)}
      </section>
    </Fragment>
  );
}

export default Profile;