import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

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
      <div className="top flex center">
        <article className="post rad">
          <section className="line fill">
            <Link to="/profile">
              <img src={require("../img/profile.jpg")} alt="profile" className="icon" />
              <p className="nick bold left">developer</p>
            </Link>
            <span className="dot sub" onClick={this.togglePop}>&hellip;</span>
            {this.state.showPop ?
              <Popup closePop={this.togglePop} /> : null}
          </section>
            <Link to={`/details/${this.props.id}`} className="picture">
              <img src={require(`../img/${this.props.src}`)} alt={`${this.props.id}`} className="picture" />
          </Link>
        </article>
      </div>
    );
  }
}

export default Post;