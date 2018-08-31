import React, { Component } from 'react';

class Subscribe extends Component {
  constructor() {
    super();

    this.state = { isToggleOn: true };
  }

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick} className="btn bold">
        {this.state.isToggleOn ? 'Subscribe' : 'Unsubscribe'}
      </button>
    );
  }
}

export default Subscribe;