import React from 'react';

import { Link } from 'react-router-dom';

const Post = ({ item }) => (
  <article className="post rad top">
    <Link to={`/details/${item.id}`}>
      <div style={{ backgroundImage: `url(${item.src})` }} className="box" />
    </Link>
    <section className="content fill">
      <h2>{item.autor}</h2>
      <span>{item.location}</span>
      <p>{item.description}</p>
    </section>
  </article>
);

export default Post;
