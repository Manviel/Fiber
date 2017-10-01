import React, { Component } from 'react';

class Block extends Component {
  render() {
    return(
      <div className="foto">
        <img src={require(`../img/${this.props.src}`)} alt={`${this.props.id}`} />
      </div>
    );
  }
}

export default Block;