import React, { Component, Fragment } from 'react';

import Header from '../Header';
import Settings from './Settings';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      preview: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        preview: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    return (
      <Fragment>
        {Header({ name: "upload" })}
        <section className="preview">
          <input type="file"
            onChange={this.handleChange} />
          <Settings image={this.state.preview} />
        </section>
      </Fragment>
    );
  }
}

export default Upload;