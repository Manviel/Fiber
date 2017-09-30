import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

const Header = (props) => {
  return(
    <header className="logo">
      <Link to="/">
        <img src={require("../img/solid.png")} className="badge" alt="solid" />
      </Link>
      <div className="caption">
        <p className="bold">developer</p>
      </div>
    </header>
  );
};

export default Header;