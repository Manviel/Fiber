import React, { Component, Fragment } from 'react';

import Range from '../components/Range';
import Filter from '../components/Filter';

class Settings extends Component {
  constructor() {
    super();

    this.state = {
      'contrast': 100,
      'hue': 0,
      'brightness': 100,
      'saturate': 100
    };
  }

  handleChange = (e) => {
    let filter = e.target.id;
    let value = e.target.value;

    this.setState(prevState => {
      prevState[filter] = value;

      return prevState;
    });
  }

  render() {
    return (
      <Fragment>
        <Filter key="Default" filterFunctions={this.state}>
          {this.props.image && <img src={this.props.image} alt="preview" className="picture" />}
        </Filter>
        <aside className="side">
          <Range name="contrast"
            min={0} max={200} value={this.state.contrast}
            onChange={this.handleChange}>
          </Range>
          <Range name="hue"
            min={-360} max={360} value={this.state.hue}
            onChange={this.handleChange}>
          </Range>
          <Range name="brightness"
            min={0} max={200} value={this.state.brightness}
            onChange={this.handleChange}>
          </Range>
          <Range name="saturate"
            min={0} max={100} value={this.state.saturate}
            onChange={this.handleChange}>
          </Range>
        </aside>
      </Fragment>
    );
  }
}

export default Settings;