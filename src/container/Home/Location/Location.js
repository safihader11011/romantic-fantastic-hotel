import React, { useState, useEffect, Fragment } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import Loader from 'components/Loader/Loader';
import Container from 'components/UI/Container/Container';
import Heading from 'components/UI/Heading/Heading';
import TextLink from 'components/UI/TextLink/TextLink';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import ImageCard from 'components/ImageCard/ImageCard';
import GlideCarousel, {
  GlideSlide,
} from 'components/UI/GlideCarousel/GlideCarousel';
import useDataApi from 'library/hooks/useDataApi';
import { LISTING_POSTS_PAGE } from 'settings/constant';
import LocationWrapper, { CarouselSection } from './Location.style';
import { getPackagesCount } from '../../../services/packages';
import { baseUrl } from '../../../services/axios'

const carouselOptions = {
  type: 'slider',
  perView: 5,
  gap: 30,
  hoverpause: true,
  breakpoints: {
    1440: {
      perView: 5,
      gap: 20,
    },
    1200: {
      perView: 4,
    },
    991: {
      perView: 3,
      gap: 15,
    },
    667: {
      perView: 2,
      gap: 20,
    },
    480: {
      perView: 1,
      gap: 0,
    },
  },
};

const LocationGrid = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  let fetchPackagesCount = async () => {
    let data = await getPackagesCount();
    if (data) {
      setData(data);
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPackagesCount()
  }, [])

  return (
    <React.Fragment>
      {(loading) ?
        <div className="loader" >
          <Loader
            type="ThreeDots"
            color="#CE181E"
            height={100}
            width={100}
          // timeout={3000} //3 secs
          />
        </div>
        :
        <LocationWrapper>
          {console.log(data)}
          <Container fluid={true}>
            <SectionTitle
              title={<Heading content="Explore Destinations" />}
              link={<TextLink link={LISTING_POSTS_PAGE} content="Show all" />}
            />

            <CarouselSection>
              {data.length !== 0 ? (
                <GlideCarousel
                  carouselSelector="explore_carousel"
                  prevButton={<IoIosArrowBack />}
                  nextButton={<IoIosArrowForward />}
                  options={carouselOptions}
                >
                  <>
                    {data.map((post, index) => (
                      <GlideSlide key={index}>
                        <ImageCard
                          link={`listing/${post.city}`}
                          imageSrc={(post.image) ? (baseUrl + post.image) : null}
                          title={post.city}
                          meta={`${post.noOfPackages} Packages`}
                        />
                      </GlideSlide>
                    ))}
                  </>
                </GlideCarousel>
              ) : (
                  <Loader />
                )}
            </CarouselSection>
          </Container>
        </LocationWrapper>
      }
    </React.Fragment>
  );
};

export default LocationGrid;
