
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

import Search  from '../Search/Search';
import Filter  from '../Filter/Filter';
import Gallery from '../Gallery/Gallery';
import apiKey  from '../../config.js';

import './App.scss';

const Set = {
  search : {
    method  : "flickr.photos.search",
    format  : "json&nojsoncallback=1",
    page    : 1,
    perPage : 24
  }
};

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      photos  : [],
      loading : true
    }
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'planes') => {
    axios.get(`https://api.flickr.com/services/rest/?method=${Set.search.method}&api_key=${apiKey}&tags=${query}&format=${Set.search.format}&page=${Set.search.page}&per_page=${Set.search.perPage}`)
    .then(response => {
      this.setState({
        photos  : response.data.photos.photo,
        loading : false
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <BrowserRouter>

        <div className="container">

          <Route path="/" render={ () => <Search onSearch={ this.performSearch } /> } />

          <Filter doSearch={ this.performSearch } />

          <div className="photo-container">

            {
              ( this.state.loading )
              ? <h2>Loading...</h2>
              : <Gallery data={ this.state.photos } />
            }

          </div>

        </div>

      </BrowserRouter>
    );
  }
}
