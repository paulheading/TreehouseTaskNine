import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigate.scss';

export default class Navigate extends Component {

  constructor(props) {
    super(props);
  }

  handleClick = delta => {
    this.props.changeLoading(true);
    this.props.changeSearch(delta);
  }

  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li><NavLink to="/cats" onClick={ () => this.handleClick("cats") }>Cats</NavLink></li>
          <li><NavLink to="/dogs" onClick={ () => this.handleClick("dogs") }>Dogs</NavLink></li>
          <li><NavLink to="/pigs" onClick={ () => this.handleClick("pigs") }>Pigs</NavLink></li>
        </ul>
      </nav>
    );
  }
}
