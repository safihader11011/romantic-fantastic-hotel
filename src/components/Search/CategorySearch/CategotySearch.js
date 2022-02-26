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
  getPropertyType,
} from '../SearchParams';
import CategroySearchWrapper, {
  RoomGuestWrapper,
  ItemWrapper,
  ActionWrapper,
} from './CategorySearch.style';

const CategotySearch = ({ packageTypes, history, location, match }) => {
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
      pathname: (match.params.city) ? `/listing/${match.params.city}` : '/listing',
      search: search,
    });
    window.location.reload();
  };

  const onSearchReset = () => {
    const search = setStateToUrl({ reset: '' });
    history.push({
      pathname: (match.params.city) ? `/listing/${match.params.city}` : '/listing',
      search: search,
    });
    window.location.reload();
  };

  return (
    <CategroySearchWrapper>
      {packageTypes.options.map(a => (
        <div className="view_with__popup">
          <div className="popup_handler">
            {(amenities.includes(a.name)) ?
              <Button type="default" onClick={value => onChange([a.name], 'amenities')} style={{ backgroundColor: '#CE181E', color: '#fff' }}>
                {a.name}
              </Button>
              :
              <Button type="default" onClick={value => onChange([a.name], 'amenities')}>
                {a.name}
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
