import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-image';

import Popup from './Popup';

class Post extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showPop: false
    };
  }

  togglePop = () => {
    this.setState({
      showPop: !this.state.showPop
    });
  }

  render() {
    return (
      <div className="item">
        <article className="line">
          <Link to="/profile">
            <ProgressiveImage
              src={require("../img/profile.jpg")}
              placeholder={require("../img/tiny-profile.jpg")}>
              {(src, loading) => (
                <img style={{ opacity: loading ? 0.5 : 1 }}
                  src={src} alt="profile" className="icon" />
              )}
            </ProgressiveImage>
            <div className="nick">
              <p className="bold">developer</p>
            </div>
          </Link>
          <img src={require("../img/dot.png")} alt="dot"
            className="dot" onClick={this.togglePop} />
          {this.state.showPop ?
            <Popup
              closePop={this.togglePop} /> : null}
        </article>
        <Link className="picture" to={`/details/${this.props.id}`}>
          <ProgressiveImage
            src={require(`../img/${this.props.src}`)}
            placeholder={require(`../img/tiny-${this.props.src}`)}>
            {(src, loading) => (
              <img style={{ opacity: loading ? 0.5 : 1 }}
                src={src} alt={`${this.props.id}`} className="auto" />
            )}
          </ProgressiveImage>
        </Link>
      </div>
    );
  }
}

export default Post;