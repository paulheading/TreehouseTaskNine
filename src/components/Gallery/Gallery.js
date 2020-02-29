import React       from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import NotFound    from '../NotFound/NotFound';

import './Gallery.scss';

const Gallery = props => {

  let results = props.data,
      photos;

  if (results.length > 0) {
    photos = results.map( galleryItem => <GalleryItem farm={ galleryItem.farm } server={ galleryItem.server } id={ galleryItem.id } secret={ galleryItem.secret } key={ galleryItem.id } /> );
  } else {
    photos = <NotFound title="No Results Found" message="Your search did not return any results. Please try again." />
  }

  return (
    <div className="photo-container">
      {
        (props.loading) ?
        <h2>Loading</h2> :
        <React.Fragment>
        <h2>Results</h2>
        <ul>{photos}</ul>
        </React.Fragment>
      }
    </div>
  );
}

export default Gallery;
