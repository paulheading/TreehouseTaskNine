import React, { Component } from 'react';
import Search   from '../Search/Search';
import Navigate from '../Navigate/Navigate';
import Gallery  from '../Gallery/Gallery';
import NotFound from '../NotFound/NotFound';

export default class Layout extends Component {

  pushPath = path => {
    this.props.history.push(path);
  }

  render() {
    let preset = this.props.preset,
        isNotFound = false;

    if (preset === "not found") {
      isNotFound = true;
    }

    return (
      <React.Fragment>
        <Search
          preset={this.props.preset}
          pushPath={this.pushPath}
          changeSearch={this.props.changeSearch}
          changeLoading={this.props.changeLoading}/>
        <Navigate
          changeSearch={this.props.changeSearch}
          changeLoading={this.props.changeLoading}/>
        { isNotFound ? <NotFound title="404 Page Not Found" message="Oopsy! I guess this page no longer live here??" /> : <Gallery loading={this.props.loading} data={this.props.data} /> }
      </React.Fragment>
    );
  }
}
