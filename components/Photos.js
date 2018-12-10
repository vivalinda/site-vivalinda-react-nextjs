import React from 'react';
import { LazyLoadImage, trackWindowScroll }
  from 'react-lazy-load-image-component';

const Gallery = ({ images }) => (
  <div>
    {images.map((image) =>
      <LazyLoadImage
        key={image}
        alt="VIVALINDA"
        height={image.height}
        // Make sure to pass down the scrollPosition,
        // this will be used by the component to know
        // whether it must track the scroll position or not
        //scrollPosition={scrollPosition}
        src={image}
        width={image.width}
        />
    )}
  </div>
);
// Wrap Gallery with trackWindowScroll HOC so it receives
// a scrollPosition prop to pass down to the images

export default Gallery;
