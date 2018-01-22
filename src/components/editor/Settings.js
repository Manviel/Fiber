import React, { Component, Fragment } from 'react';

import Range from './Range';
import Filter from './Filter';
import Image from './Image';

class Settings extends Component {
  constructor(props) {
    super(props);
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

    this.setState((prevState, props) => {
      prevState[filter] = value;
      return prevState;
    });
  }

  render() {
    return (
      <Fragment>
        <section className="about">
          <Filter key="Default" filterFunctions={this.state}>
            <Image image={this.props.image} />
          </Filter>
        </section>
        <aside>
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