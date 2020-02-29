
import React, { Component } from 'react';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Layout from '../Layout/Layout';
import apiKey from '../../config.js';
import axios  from 'axios';

import './App.scss';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      photos  : [],
      loading : true,

      search  : {
        method  : "flickr.photos.search",
        format  : "json&nojsoncallback=1",
        preset  : "discover",
        perPage : 24,
        page    : 1
      }
    }
  }

  performSearch = query => {
    axios.get(`https://api.flickr.com/services/rest/?method=${this.state.search.method}&api_key=${apiKey}&tags=${query}&format=${this.state.search.format}&page=${this.state.search.page}&per_page=${this.state.search.perPage}`)
    .then(res => {
      this.setState({
        photos  : res.data.photos.photo,
        loading : false
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  handleSearchChange = (delta = "planes") => {
    this.performSearch(delta);
    console.log(delta);
  }

  handleLoadChange = reset => {
    this.setState({loading : reset});
  }

  render() {
    return (
      <BrowserRouter>

        <div className="container">

          <Switch>

            <Route exact path="/" render={ props => <Layout {...props}
              loading={this.state.loading}
              preset={this.state.search.preset}
              changeSearch={this.handleSearchChange}
              changeLoading={this.handleLoadChange}
              data={this.state.photos} /> } />

            <Route path="/search/:term" render={ props => <Layout {...props}
              loading={this.state.loading}
              preset={props.match.params.term}
              changeSearch={this.handleSearchChange}
              changeLoading={this.handleLoadChange}
              data={this.state.photos} /> } />

            <Route path="/cats" render={ props => <Layout {...props}
              loading={this.state.loading}
              preset="cats"
              changeSearch={this.handleSearchChange}
              changeLoading={this.handleLoadChange}
              data={this.state.photos} /> } />

            <Route path="/dogs" render={ props => <Layout {...props}
              loading={this.state.loading}
              preset="dogs"
              changeSearch={this.handleSearchChange}
              changeLoading={this.handleLoadChange}
              data={this.state.photos} /> } />

            <Route path="/pigs" render={ props => <Layout {...props}
              loading={this.state.loading}
              preset="pigs"
              changeSearch={this.handleSearchChange}
              changeLoading={this.handleLoadChange}
              data={this.state.photos} /> } />

            <Route path="/" render={ props => <Layout {...props}
              loading={this.state.loading}
              preset="not found"
              changeSearch={this.handleSearchChange}
              changeLoading={this.handleLoadChange}
              data={this.state.photos} /> } />

          </Switch>

        </div>

      </BrowserRouter>
    );
  }
}
