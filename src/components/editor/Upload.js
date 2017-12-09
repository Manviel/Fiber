import React, { Component } from 'react';

import Header from '../Header';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      preview: ''
    };
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
    let { preview } = this.state;
    let image = (<img src={preview} alt="preview" className="pic" />);

    return (
      <div>
        <Header name="upload" />
        <section className="preview">
          <input className="file" type="file"
            onChange={this.handleChange.bind(this)} />
          <article className="picture">
            {image}
          </article>
        </section>
      </div>
    );
  }
}

export default Upload;