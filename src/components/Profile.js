import React, { Fragment } from 'react';

import Header from './Header';
import Subscribe from '../containers/Subscribe';

import '../css/Beaty.css';

const Profile = ({ preload }) => (
  <Fragment>
    {Header({ name: 'Profile' })}
    <section className="flex center container fill">
      <img
        src={require('../img/profile.jpg')}
        alt="profile"
        className="profile"
      />
      <h1 className="description">{preload.autor}</h1>
      <h4 className="description">Independent Designer</h4>
      <p className="description grey">{preload.location}</p>
      <Subscribe />
    </section>
  </Fragment>
);

export default Profile;
