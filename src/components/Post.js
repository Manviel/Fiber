import React from 'react';
import { Link } from 'react-router-dom';
import './css/Style.css';

const Post = (props) => {
  return(
    <div className="item">
      <article className="line">
        <Link to="/profile">
          <img src={require("../img/profile.jpg")} alt="profile" className="icon" />
        </Link>
        <div className="nick">
          <p className="bold">developer</p>
        </div>
        <img src={require("../img/dot.png")} alt="dot" className="dot" />
      </article>
      <Link className="picture" to={`/details/${props.id}`}>
        <img src={require(`../img/${props.src}`)} alt={`${props.id}`} id="pic" />
      </Link>
    </div>
  );
}

export default Post;