import React from 'react';

import { Link } from 'react-router-dom';

const Post = ({ item }) => (
  <article className="post rad top">
    <Link to={`/details/${item.id}`} className="img-box">
      <img src={require(`../img/${item.src}`)} alt={item.id} />
    </Link>
    <section className="content fill">
      <h2>{item.autor}</h2>
      <span>{item.location}</span>
      <p>{item.description}</p>
    </section>
  </article>
);

export default Post;
