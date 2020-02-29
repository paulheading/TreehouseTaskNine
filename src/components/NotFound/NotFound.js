import React from 'react';

import './NotFound.scss';

const NotFound = props => {
  return (
    <li className="not-found">
      <h3>{props.title}</h3>
      <p>{props.message}</p>
    </li>
  );
}

export default NotFound;
