import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import TextLink from 'components/UI/TextLink/TextLink';
import Rating from 'components/UI/Rating/Rating';
import Favourite from 'components/UI/Favorite/Favorite';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import GridCard from '../GridCard/GridCard';
import { borderRadius } from 'styled-system';

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
    paritialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    paritialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const PostGrid = ({
  title,
  rating,
  location,
  price,
  ratingCount,
  package_images,
  slug,
  id,
  link,
  image,
  featured,
  type
}) => {
  return (
    <div>
      {(type === "Package") ?
        <GridCard
          isCarousel={true}
          title={<TextLink link={`${link}/${id}`} content={title} />}
          price={`${price} AED`}
          viewDetailsPackage={
            <TextLink
              link={`${link}/${id}`}
              icon={<FiExternalLink />}
              content="View Details"
            />
          }
        >
          {(package_images.length > 0) ?
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              renderDotsOutside={false}
              responsive={responsive}
              showDots={true}
              sliderClass=""
              slidesToSlide={1}
            >
              {package_images.map(({ image, id }, index) => (
                <img
                  src={image}
                  alt={id}
                  key={index}
                  draggable={false}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'relative',
                  }}
                />
              ))}
            </Carousel>
            :
            <div className="d-flex align-items-center justify-content-center" style={{ height: '170px', border: '1px solid #E6E6E6', borderRadius: '6px 6px 0px 0px', backgroundColor: '#E6E6E6' }}>
              <p className="p-0 m-0">No Photos Available</p>
            </div>
          }
          {(featured) ?
            <div style={{ position: 'absolute', top: '0px', backgroundColor: '#CE181E', color: 'white', padding: '2px 15px', fontWeight: '600', fontSize: '10px' }}>FEATURED</div>
            :
            null
          }
        </GridCard>
        :
        <GridCard
          isCarousel={true}
          favorite={
            <Favourite
              onClick={event => {
                console.log(event);
              }}
            />
          }
          location={location.formattedAddress}
          title={<TextLink link={`${link}/${id}`} content={title} />}
          price={`${price} AED`}
          rating={<Rating rating={rating} ratingCount={ratingCount} type="bulk" />}
          viewDetailsBtn={
            <TextLink
              link={`${link}/${slug}`}
              icon={<FiExternalLink />}
              content="View Details"
            />
          }
        >
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            renderDotsOutside={false}
            responsive={responsive}
            showDots={true}
            sliderClass=""
            slidesToSlide={1}
          >
            {package_images.map(({ url, title }, index) => (
              <img
                src={url}
                alt={title}
                key={index}
                draggable={false}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'relative',
                }}
              />
            ))}
          </Carousel>
        </GridCard>
      }
    </div>
  );
};

export default PostGrid;
