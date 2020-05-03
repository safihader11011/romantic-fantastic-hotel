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

const images = [
  {
    original: PostImage1,
    thumbnail: PostThumb1,
  },
  {
    original: PostImage2,
    thumbnail: PostThumb2,
  },
  {
    original: PostImage3,
    thumbnail: PostThumb3,
  },
];

const PostImageGallery = () => {
  return (
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
  );
};

export default PostImageGallery;
