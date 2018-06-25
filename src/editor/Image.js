import React from 'react';

function Image(props) {
  return (
    <article className="picture">
      <img src={props.image} alt="preview" className="picture" />
    </article>
  );
}

export default Image;