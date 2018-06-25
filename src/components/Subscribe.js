import React, { PureComponent } from 'react';

class Subscribe extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick} className="toggle rad">
        {this.state.isToggleOn ? 'Subscribe' : 'Unsubscribe'}
      </button>
    );
  }
}

export default Subscribe;