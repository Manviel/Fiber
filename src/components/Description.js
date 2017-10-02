import React, { Component } from 'react';
import './css/Beaty.css';

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0}
  }

  handleClick() {
    this.setState((prevState) => ({
      clicks: prevState.clicks + 1
    }));
  }

  render() {
    return(
      <section className="wrapper">
        <div className="description">
          <button id="like" onClick={this.handleClick.bind(this)}>
            <div className="heart"></div>
          </button>
          <button id="comment">
            <div className="chat"></div>
          </button>
          <p className="likes">
            <span id="counter">{this.state.clicks}</span> likes
          </p>
          <p>
            <span className="bold">developer</span>: {this.props.show.description}
          </p>
        </div>
        <div className="comments">
          <input type="text" name="message" placeholder="Add a comment" id="input" />
          <ul id="messages"></ul>
        </div>
      </section>
    );
  }
}

export default Description;