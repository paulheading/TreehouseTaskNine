import React from 'react';
import { NavLink } from 'react-router-dom';
import './Filter.scss';

const Filter = props => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/cats" onClick={ () => props.doSearch('cats!')}>Cats</NavLink></li>
        <li><NavLink to="/dogs" onClick={ () => props.doSearch('dogs!')}>Dogs</NavLink></li>
        <li><NavLink to="/computers" onClick={ () => props.doSearch('computers!')}>Computers</NavLink></li>
      </ul>
    </nav>
  );
}

export default Filter;
