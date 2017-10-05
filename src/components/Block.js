import React from 'react';
import { Link } from 'react-router-dom';

const Block = (props) => {
  return(
    <Link className="foto" to={`/details/${props.id}`}>
      <img src={require(`../img/${props.src}`)} alt={`${props.id}`} />
    </Link>
  );
}

export default Block;