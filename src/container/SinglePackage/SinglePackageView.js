import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'library/hooks/useLocation';
import Sticky from 'react-stickynode';
import Row from 'components/UI/Antd/Grid/Row';
import Col from 'components/UI/Antd/Grid/Col';
import Heading from 'components/UI/Heading/Heading';
import Modal from 'components/UI/Antd/Modal/Modal';
import Button from 'components/UI/Antd/Button/Button';
import Container from 'components/UI/Container/Container';
import Loader from 'react-loader-spinner';
import useWindowSize from 'library/hooks/useWindowSize';
import Description from './Description/Description';
import HotelDescription from '../SinglePage/Description/Description'
import Amenities from './Amenities/Amenities';
import Location from './Location/Location';
import Review from './Review/Review';
import Reservation from './Reservation/Reservation';
import BottomReservation from './Reservation/BottomReservation';
import TopBar from './TopBar/TopBar';
import SinglePageWrapper, { PostImage } from './SinglePackageView.style';
import PostImageGallery from './ImageGallery/ImageGallery';
import singlePostBgImg from 'assets/images/packages/bg/single-package-bg.png';
import useDataApi from 'library/hooks/useDataApi';
import isEmpty from 'lodash/isEmpty';
import { getSinglePackages } from '../../services/packages'

const SinglePackage = (props) => {
  const { href } = useLocation();
  const [isModalShowing, setIsModalShowing] = useState(false);
  const { width } = useWindowSize();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // if (isEmpty(data) || loading) return <Loader />;

  let fetchPackage = async () => {
    let data = await getSinglePackages(props.match.params.id);
    console.log(data);
    if (data) {
      setData(data);
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPackage()
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
        <SinglePageWrapper style={{ marginBottom: '0px', paddingBottom: '0px' }}>
          <PostImage style={{
            backgroundImage: (data.package_images.length > 0) ?
              `url(${data.package_images[0].image})`
              :
              `url(${singlePostBgImg})`
          }}>
            <div class="pricing"><p>{data.price} AED</p></div>
            <Button
              type="primary"
              onClick={() => setIsModalShowing(true)}
              className="image_gallery_button"
            >
              View Photos
        </Button>
            <Modal
              visible={isModalShowing}
              onCancel={() => setIsModalShowing(false)}
              footer={null}
              width="100%"
              maskStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
              }}
              wrapClassName="image_gallery_modal"
              closable={false}
            >
              <Fragment>
                <PostImageGallery package_images={data.package_images} />
                <Button
                  onClick={() => setIsModalShowing(false)}
                  className="image_gallery_close"
                >
                  <svg width="16.004" height="16" viewBox="0 0 16.004 16">
                    <path
                      id="_ionicons_svg_ios-close_2_"
                      d="M170.4,168.55l5.716-5.716a1.339,1.339,0,1,0-1.894-1.894l-5.716,5.716-5.716-5.716a1.339,1.339,0,1,0-1.894,1.894l5.716,5.716-5.716,5.716a1.339,1.339,0,0,0,1.894,1.894l5.716-5.716,5.716,5.716a1.339,1.339,0,0,0,1.894-1.894Z"
                      transform="translate(-160.5 -160.55)"
                      fill="#909090"
                    />
                  </svg>
                </Button>
              </Fragment>
            </Modal>
          </PostImage>

          <TopBar title={data.title} shareURL={href} media={data.package_images} />

          {/* Package */}
          <Container>
            <Row gutter={30} id="reviewSection" style={{ marginTop: 30 }}>
              <Col xl={24}>
                <Description
                  c_name="overview"
                  content={data.content}
                  title={data.title}
                  location={(data.formattedAddress) ? (data.hotelTitle + ", " + data.formattedAddress) : null}
                  rating={data.rating}
                  ratingCount={data.ratingCount}
                  booking={true}
                />
                <Amenities amenities={data.amenities} />
              </Col>
            </Row>
          </Container>

          {/* Hotel */}
          <Container>
            <Row gutter={30} id="reviewSection" style={{ marginTop: 30 }}>
              <Col xl={24}>
                {/* <Heading as="h2" content="Hotel" {...titleStyle} /> */}
                <Description
                  c_name="hotel"
                  content={data.hotelContent}
                  title={data.hotelTitle}
                // location1={(location) ? (location.formattedAddress) : null}
                />
                <Location location={data} />
              </Col>
              {/* <Col xl={8}>
            {width > 1200 ? (
              <Sticky
                innerZ={999}
                activeClass="isSticky"
                top={202}
                bottomBoundary="#reviewSection"
              >
                <Reservation />
              </Sticky>
            ) : (
              <BottomReservation
                title={title}
                data.price={data.price}
                rating={rating}
                ratingCount={ratingCount}
              />
            )}
          </Col> */}
            </Row>
            <Row gutter={30}>
              <Col xl={24}>
                <Review
                  ratingCount={data.ratingCount}
                  rating={data.rating}
                />
              </Col>
            </Row>
          </Container>
        </SinglePageWrapper>
      }
    </React.Fragment>
  );
};

SinglePackage.propTypes = {
  titleStyle: PropTypes.object
};

SinglePackage.defaultProps = {
  titleStyle: {
    color: '#2C2C2C',
    fontSize: ['17px', '20px', '25px'],
    lineHeight: ['1.15', '1.2', '1.36'],
    mb: '4px',
  }
};

export default SinglePackage;
