import React from 'react';

function Image(props) {
  return(
    <article className="picture">
      <img src={props.image} alt="preview" className="pic" />
    </article>
  );
}

export default Image;