import React, { PureComponent } from 'react';
import List from './List';
import '../css/Beaty.css';

class Description extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { clicks: 0, items: [], text: '' };
  }

  handleClick = () => {
    this.setState((prevState) => ({
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
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }

  render() {
    return (
      <section className="wrapper">
        <div className="description">
          <button id="like" onClick={this.handleClick}>
            <div className="heart"></div>
          </button>
          <button id="comment" onClick={this.handleSubmit} className="left">
            <div className="chat"></div>
          </button>
          <p className="bold parag">
            <span id="counter">{this.state.clicks}</span> likes
          </p>
          <p className="parag">
            <span className="bold">developer</span>: {this.props.show.description}
          </p>
        </div>
        <div className="description">
          <input type="text" placeholder="Add a comment"
            className="input rad"
            onChange={this.handleChange}
            value={this.state.text} />
        </div>
        <List items={this.state.items} />
      </section>
    );
  }
}

export default Description;