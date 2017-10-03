import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Style.css';
import Description from './Description';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
  }
  
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  
  render() {
    const { src, id } = this.props.show;

    return(
      <div className="item">
        <article className="line">
          <Link to="/profile">
            <img src={require("../img/profile.jpg")} alt="profile" className="icon" />
          </Link>
          <div className="nick">
            <p className="bold">developer</p>
          </div>
          <span className="subscribe">
            <button onClick={this.handleClick.bind(this)} className="toggle">
              {this.state.isToggleOn ? 'Subscribe' : 'Unsubscribe'}
            </button>
          </span>
        </article>
        <article className="container">
          <div className="picture">
            <img src={require(`../img/${src}`)} alt={`${id}`} id="pic" />
          </div>
          <Description show={this.props.show} />
        </article>
      </div>
    );
  }
}

export default Details;