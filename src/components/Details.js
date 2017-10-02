import React from 'react';
import { Link } from 'react-router-dom';
import './css/Style.css';
import Description from './Description';

const Details = (props) => {
  const { src, id } = props.show;
  
  return(
    <div className="item">
      <article className="line">
        <Link to="/profile">
          <img src={require("../img/profile.jpg")} alt="profile" className="icon" />
        </Link>
        <div className="nick">
          <p className="bold">developer</p>
        </div>
      </article>
      <article className="container">
        <div className="picture">
          <img src={require(`../img/${src}`)} alt={`${id}`} id="pic" />
        </div>
        <Description show={props.show} />
      </article>
    </div>
  );
}

export default Details;