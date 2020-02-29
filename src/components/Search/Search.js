
import React, { Component } from 'react';
import icon  from './icon.svg';

import './Search.scss';

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText : ""
    }
  }

  componentDidMount() {
    this.props.changeSearch(this.props.preset);
  }

  onSearchChange = e => {
    this.setState({ searchText : e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.changeLoading(true);
    this.props.changeSearch(this.state.searchText);

    let query = this.query.value, path = `/search/${query}`;

    if (query.length > 0) {
      this.props.pushPath(path);
    }

    e.currentTarget.reset();
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input ref={ (input) => this.query = input }
               type="search"
               name="search"
               onChange={this.onSearchChange}
               placeholder={this.props.preset}/>
        <button type="submit" id="submit" className="search-button"><img src={icon} className="App-logo" alt="logo" /></button>
      </form>
    );
  }
}
