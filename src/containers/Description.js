import React, { Component } from 'react';

import List from '../components/List';

import '../css/Beaty.css';

class Description extends Component {
  constructor() {
    super();

    this.state = { clicks: 0, items: [], text: '' };
  }

  handleClick = () => {
    this.setState(prevState => ({
      clicks: prevState.clicks + 1
    }));
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      text: this.state.text,
      id: Date.now()
    };

    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }

  render() {
    return (
      <section>
        <div className="flex space description">
          <button onClick={this.handleClick}>
            <div className="mark heart"></div>
          </button>
          <span className="bold">{this.state.clicks} likes</span>
          <button onClick={this.handleSubmit}>
            <div className="mark chat"></div>
          </button>
        </div>
        <div className="description">
          <input type="text" placeholder="Add a comment"
            className="input rad mess"
            onChange={this.handleChange}
            value={this.state.text} />
          <List items={this.state.items} />
        </div>
      </section>
    );
  }
}

export default Description;