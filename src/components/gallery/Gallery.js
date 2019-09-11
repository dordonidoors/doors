import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';

// styles
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Gallery.scss';

const Gallery = (props) => {
  return (
    <section id='gallery' ref={props.refProp} className='section is-medium'>
      <h1 className='title is-2'>Gallery</h1>
      <div className='container'>
        <Carousel
          showArrows={true}
          showThumbs={false}
          autoPlay={true}
          dynamicHeight={true}>
          <div>
            <img src={`${process.env.REACT_APP_IMAGES_PREFIX}/image7.JPG`} style={{width: '30%'}}/>
          </div>
          <div>
            <img src={`${process.env.REACT_APP_IMAGES_PREFIX}/image1.JPG`} style={{width: '30%'}}/>
          </div>
          <div>
            <img src={`${process.env.REACT_APP_IMAGES_PREFIX}/image5.JPG`} style={{width: '30%'}}/>
          </div>
          <div>
            <img src={`${process.env.REACT_APP_IMAGES_PREFIX}/image2.JPG`} style={{width: '30%'}}/>
          </div>
          <div>
            <img src={`${process.env.REACT_APP_IMAGES_PREFIX}/image3.JPG`} style={{width: '30%'}}/>
          </div>
          <div>
            <img src={`${process.env.REACT_APP_IMAGES_PREFIX}/image4.JPG`} style={{width: '85%'}}/>
          </div>
          <div>
            <img src={`${process.env.REACT_APP_IMAGES_PREFIX}/firerated.jpg`} style={{width: '65%'}}/>
          </div>
          <div>
            <img src={`${process.env.REACT_APP_IMAGES_PREFIX}/gallery5.webp`} style={{width: '40%'}}/>
          </div>
          <div>
            <img src={`${process.env.REACT_APP_IMAGES_PREFIX}/gallery6.webp`} style={{width: '40%'}}/>
          </div>
          <div>
            <img src={`${process.env.REACT_APP_IMAGES_PREFIX}/gallery7.webp`} style={{width: '40%'}}/>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

// prop types
Gallery.propTypes = {
  refProp: PropTypes.object
};

Gallery.defaultProps = {
  refProp: null
};

export default Gallery;
