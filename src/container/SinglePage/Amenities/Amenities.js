import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/UI/Heading/Heading';
import TextLink from 'components/UI/TextLink/TextLink';
import { FaWifi, FaCarAlt, FaSwimmer, FaAirFreshener } from 'react-icons/fa';
import IconCard from 'components/IconCard/IconCard';
import AmenitiesWrapper, { AmenitiesArea } from './Amenities.style';
import { TextButton } from '../SinglePageView.style';
import { Element } from 'react-scroll';
import './Packages.css'

const Amenities = ({ titleStyle, linkStyle, packages }) => {
  return (
    <Element name="amenities" className="Amenities">
      <AmenitiesWrapper>
        <Heading as="h2" content="Packages" {...titleStyle} />
        <AmenitiesArea>
          {packages.map(f => (
            <div className='packages_div'>
              <img src={f.image} className='packages_image'></img>
              <h1 className='packages_title'>{f.title}</h1>
              <p>{f.content}</p>
              <div className='packages_separator'></div>
              <p className='packages_price'>Price / <span>{f.price} AED</span></p>
            </div>
          ))}
        </AmenitiesArea>
        {/* <TextButton>
          <TextLink link="#1" content="Show all amenities" {...linkStyle} />
        </TextButton> */}
      </AmenitiesWrapper>
    </Element>
  );
};

Amenities.propTypes = {
  titleStyle: PropTypes.object,
  linkStyle: PropTypes.object,
};

Amenities.defaultProps = {
  titleStyle: {
    color: '#2C2C2C',
    fontSize: ['17px', '20px', '25px'],
    lineHeight: ['1.15', '1.2', '1.36'],
    mb: ['14px', '20px', '30px'],
  },
  linkStyle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#CE181E',
  },
};

export default Amenities;
