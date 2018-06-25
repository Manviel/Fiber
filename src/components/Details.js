import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Description from './Description';

class Details extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
  }
  
  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  
  render() {
    const { src, id } = this.props.show;

    return (
      <Fragment>
        {Header({ name: id })}
        <div className="top flex center">
          <article className="post rad">
            <section className="line fill">
              <Link to="/profile">
                <img src={require("../img/profile.jpg")} alt="profile" className="icon" />
                <p className="nick bold left">developer</p>
              </Link>
              <span className="sub top">
                <button onClick={this.handleClick} className="toggle rad">
                  {this.state.isToggleOn ? 'Subscribe' : 'Unsubscribe'}
                </button>
              </span>
            </section>
            <div className="picture">
              <img src={require(`../img/${src}`)} alt={`${id}`} className="picture" />
            </div>
            <Description show={this.props.show} />
          </article>
        </div>
      </Fragment>
    );
  }
}

export default Details;