import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import Rating from 'components/UI/Rating/Rating';
import Heading from 'components/UI/Heading/Heading';
import Text from 'components/UI/Text/Text';
import Button from 'components/UI/Antd/Button/Button';
import BookingForm from 'components/Booking/bookingForm';
import DescriptionWrapper from './Description.style';
import { RatingMeta, TextButton } from '../SinglePackageView.style';
import Row from 'components/UI/Antd/Grid/Row';
import Col from 'components/UI/Antd/Grid/Col';
import Modal from 'components/UI/Antd/Modal/Modal';

const Description = ({
  title,
  location,
  location1,
  content,
  rating,
  ratingCount,
  titleStyle,
  locationMetaStyle,
  contentStyle,
  locationStyle,
  c_name,
  booking
}) => {
  const [bookingModal, setBookingModal] = useState(false);

  return (
    <Element name={c_name} className={c_name}>
      <DescriptionWrapper>
        {(booking) ?
          <Row>
            <Col xl={16} lg={16} md={16} sm={24} xs={24}>
              {(location) ? <Text content={location} {...locationMetaStyle} /> : null}
              <Heading as="h2" content={title} {...titleStyle} />
              {(location1) ? <Text content={location1} {...locationStyle} /> : null}
              {(rating && ratingCount) ?
                <RatingMeta>
                  <Rating rating={rating} ratingCount={ratingCount} type="bulk" />
                </RatingMeta>
                :
                null
              }
            </Col>
            <Col xl={8} lg={8} md={8} sm={24} xs={24}>
              <Button type="primary" onClick={() => setBookingModal(true)}>
                Book Now
              </Button>
            </Col>
          </Row>
          :
          <React.Fragment>
            {(location) ? <Text content={location} {...locationMetaStyle} /> : null}
            <Heading as="h2" content={title} {...titleStyle} />
            {(location1) ? <Text content={location1} {...locationStyle} /> : null}
            {(rating && ratingCount) ?
              <RatingMeta>
                <Rating rating={rating} ratingCount={ratingCount} type="bulk" />
              </RatingMeta>
              :
              null
            }
          </React.Fragment>
        }
        <Modal
          width="100%"
          visible={bookingModal}
          onCancel={() => setBookingModal(false)}
          footer={null}
          maskStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
          wrapClassName="review_modal"
        >
          <BookingForm checkoutProps={false}/>
        </Modal>
        <Text content={content} {...contentStyle} />
        {/* <TextButton>
          <Button>Read more about the hotel</Button>
        </TextButton> */}
      </DescriptionWrapper>
    </Element>
    // <Element >
    //   <DescriptionWrapper>
    //     <Heading as="h2" content={title} {...titleStyle} />
    //     <Text content={content} {...contentStyle} />
    //     {/* <TextButton>
    //       <Button>Read more about the hotel</Button>
    //     </TextButton> */}
    //   </DescriptionWrapper>
    // </Element>
  );
};

Description.propTypes = {
  titleStyle: PropTypes.object,
  locationMetaStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  locationStyle: PropTypes.object,
};

Description.defaultProps = {
  titleStyle: {
    color: '#2C2C2C',
    fontSize: ['17px', '20px', '25px'],
    lineHeight: ['1.15', '1.2', '1.36'],
    mb: '4px',
  },
  locationMetaStyle: {
    fontSize: '13px',
    fontWeight: '400',
    color: '#909090',
  },
  contentStyle: {
    fontSize: '15px',
    fontWeight: '400',
    color: '#2C2C2C',
    lineHeight: '1.6',
  },
  locationStyle: {
    fontSize: '15px',
    fontWeight: '400',
    color: '#2C2C2C',
    lineHeight: '1.6',
    pb: '20px'
  },
};

export default Description;
