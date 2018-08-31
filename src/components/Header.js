import React from 'react';

import { Link } from 'react-router-dom';

import '../css/Style.css';

const Header = ({ name }) => (
  <header className="flex space nav fill">
    <Link to="/upload">
      <img src={require("../img/solid.png")} className="badge" alt="upload" />
    </Link>
    <Link to="/" className="bold">{name}</Link>
    <Link to="/profile">
      <img src={require("../img/profile.jpg")} className="badge icon" alt="profile" />
    </Link>
  </header>
);

export default Header;