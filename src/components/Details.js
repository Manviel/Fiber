import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Description from './Description';
import Subscribe from './Subscribe';

const Details = (props) => {
  return (
    <Fragment>
      {Header({ name: props.show.id })}
      <div className="top flex center">
        <article className="post rad">
          <section className="line fill">
            <Link to="/profile">
              <img src={require("../img/profile.jpg")} alt="profile" className="icon" />
              <p className="nick bold left">developer</p>
            </Link>
            <span className="sub top">
              <Subscribe />
            </span>
          </section>
          <div className="picture">
            <img src={require(`../img/${props.show.src}`)} alt={`${props.show.id}`} className="picture" />
          </div>
          <Description show={props.show} />
        </article>
      </div>
    </Fragment>
  );
}

export default Details;