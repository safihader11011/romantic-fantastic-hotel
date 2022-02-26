import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGalleryWrapper from './ImageGallery.style';

import PostImage1 from 'assets/images/packages/bg/package-image-1.jpg';
import PostImage2 from 'assets/images/packages/bg/package-image-2.jpg';
import PostImage3 from 'assets/images/packages/bg/package-image-3.jpg';
import PostThumb1 from 'assets/images/packages/bg/package-thumb-1.jpg';
import PostThumb2 from 'assets/images/packages/bg/package-thumb-2.jpg';
import PostThumb3 from 'assets/images/packages/bg/package-thumb-3.jpg';

let images = [];

const PostImageGallery = ({ package_images }) => {
  images = [];
  package_images.map(package_image => {
    images.push({
      original: package_image.image,
      thumbnail: package_image.image
    })
  })
  return (
    <React.Fragment>
      {(images.length > 0) ?
        <ImageGalleryWrapper>
          <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
            showIndex={true}
            lazyLoad={true}
            slideDuration={550}
          />
        </ImageGalleryWrapper>
        :
        <h1 style={{ textAlign: 'center', fontSize: '30px', fontWeight: '600', color: '#CE181E' }}>No Photos Available</h1>
      }
    </React.Fragment>
  );
};

export default PostImageGallery;
