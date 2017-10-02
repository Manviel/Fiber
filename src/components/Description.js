import React from 'react';
import './css/Beaty.css';

const Description = (props) => {
  return(
    <section className="wrapper">
      <div className="description">
        <button id="like">
          <div className="heart"></div>
        </button>
        <button id="comment">
          <div className="chat"></div>
        </button>
        <p className="likes">
          <span id="counter">0</span> likes
        </p>
        <p>
          <span className="bold">developer</span>: {props.show.description}
        </p>
      </div>
      <div className="comments">
        <input type="text" name="message" placeholder="Add a comment" id="input" />
        <ul id="messages"></ul>
      </div>
    </section>
  );
}

export default Description;