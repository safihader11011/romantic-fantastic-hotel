import React, { useState } from 'react';
import moment from 'moment';
import Button from 'components/UI/Antd/Button/Button';
import Slider from 'components/UI/Antd/Slider/Slider';
import Checkbox from 'components/UI/Antd/Checkbox/Checkbox';
import ViewWithPopup from 'components/UI/ViewWithPopup/ViewWithPopup';
import InputIncDec from 'components/UI/InputIncDec/InputIncDec';
import DateRangePickerBox from 'components/UI/DatePicker/ReactDates';
import { setStateToUrl, getStateFromUrl } from '../url_handler';
import {
  priceInit,
  calenderItem,
  getAmenities,
  getPropertyType,
} from '../SearchParams';
import CategroySearchWrapper, {
  RoomGuestWrapper,
  ItemWrapper,
  ActionWrapper,
} from './CategorySearch.style';

const CategotySearch = ({ history, location }) => {
  const searchParams = getStateFromUrl(location);
  const state = {
    amenities: searchParams.amenities || [],
  };
  const { amenities } = state;

  const onChange = (value, type) => {
    const query = {
      ...state,
      [type]: value,
    };
    const search = setStateToUrl(query);
    history.push({
      pathname: '/listing',
      search: search,
    });
  };

  const onSearchReset = () => {
    const search = setStateToUrl({ reset: '' });
    history.push({
      pathname: '/listing',
      search: search,
    });
  };

  return (
    <CategroySearchWrapper>
      {getAmenities.options.map(a => (
        <div className="view_with__popup">
          <div className="popup_handler">
            {(amenities.includes(a.value)) ?
              <Button type="default" onClick={value => onChange([a.value], 'amenities')} style={{ backgroundColor: '#CE181E', color: '#fff' }}>
                {a.label}
              </Button>
              :
              <Button type="default" onClick={value => onChange([a.value], 'amenities')}>
                {a.label}
              </Button>
            }
          </div>
        </div>
      ))}

      <div className="view_with__popup">
        <div className="popup_handler">
          <Button type="default" onClick={onSearchReset}>
            Reset
          </Button>
        </div>
      </div>
    </CategroySearchWrapper>
  );
};

export default CategotySearch;
