import React from 'react';
import { Link } from 'react-router-dom';
import './css/Style.css';

const Header = (props) => {
  return (
    <header className="logo">
      <Link to="/">
        <img src={require("../img/solid.png")} className="badge" alt="solid" />
      </Link>
      <Link to="/upload">
        <img src={require("../img/upload.png")} className="upload" alt="upload" />
      </Link>
      <div className="flex caption">
        <p className="bold">{props.name}</p>
      </div>
    </header>
  );
};

export default Header;