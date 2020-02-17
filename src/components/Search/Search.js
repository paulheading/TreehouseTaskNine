
import React, { Component } from 'react';
import icon  from './icon.svg';

import './Search.scss';

export default class Search extends Component {

  state = {
    searchText : ""
  }

  onSearchChange = e => {
    this.setState({ searchText : e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.searchText);
    e.currentTarget.reset();
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input type="search"
               onChange={this.onSearchChange}
               name="search"
               placeholder="search" />
        <button type="submit" id="submit" className="search-button"><img src={icon} className="App-logo" alt="logo" /></button>
      </form>
    );
  }
}
