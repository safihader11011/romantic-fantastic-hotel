import React, { useState } from 'react';
import moment from 'moment';
import Slider from 'components/UI/Antd/Slider/Slider';
import Button from 'components/UI/Antd/Button/Button';
import Drawer from 'components/UI/Antd/Drawer/Drawer';
import Checkbox from 'components/UI/Antd/Checkbox/Checkbox';
import Heading from 'components/UI/Heading/Heading';
import DateRangePicker from 'components/UI/DatePicker/ReactDates';
import InputIncDec from 'components/UI/InputIncDec/InputIncDec';
import { setStateToUrl, getStateFromUrl } from './url_handler';
import { IoIosArrowDown } from 'react-icons/io';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import {
  priceInit,
  calenderItem,
  getAmenities,
  getPropertyType,
} from './SearchParams';
import {
  FilterArea,
  FilterElementsWrapper,
  ButtonGroup,
  RoomGuestWrapper,
  ItemWrapper,
} from './MobileSearchView.style';
import CategroySearchWrapper, {
  ActionWrapper,
} from './CategorySearch/CategorySearch.style';

const FilterDrawer = ({ history, location }) => {
  const searchParams = getStateFromUrl(location);

  // state for drawer
  const [toggle, setToggle] = useState(false);

  // Amenities state
  const [amenities, setAmenities] = useState(searchParams.amenities || []);

  // Property type state
  const [propertyType, setPropertyType] = useState(searchParams.property || []);

  // Date state
  const [searchDate, setSearchDate] = useState(
    searchParams.date_range || {
      setStartDate: null,
      setEndDate: null,
    }
  );

  // Price state
  const [price, setPrice] = useState(
    searchParams.price || {
      min: 0,
      max: 100,
      defaultMin: 0,
      defaultMax: 100,
    }
  );

  // Room guest state

  const roomAndGuest = {
    room: searchParams && searchParams.room ? parseInt(searchParams.room) : 0,
    guest:
      searchParams && searchParams.guest ? parseInt(searchParams.guest) : 0,
  };

  const [roomGuest, setRoomGuest] = useState(
    roomAndGuest || {
      room: 0,
      guest: 0,
    }
  );

  // Room Guest data handling
  const handleIncrement = type => {
    console.log('clicked handleIncrement');
    setRoomGuest({
      ...roomGuest,
      [type]: roomGuest[type] + 1,
    });
  };

  const handleDecrement = type => {
    console.log('clicked handleDecrement');
    if (roomGuest[type] <= 0) {
      return false;
    }
    setRoomGuest({
      ...roomGuest,
      [type]: roomGuest[type] - 1,
    });
  };

  const handleIncDecOnChnage = (e, type) => {
    let currentValue = e.target.value;
    setRoomGuest({
      ...roomGuest,
      [type]: currentValue,
    });
  };

  // Toggle Drawer
  const handleToggleDrawer = () => {
    setToggle(!toggle);
  };

  // Amenities data handling
  const onChangeAmenity = checkedAmenityValue => {
    setAmenities(checkedAmenityValue);
  };

  // PropertyType data handling
  const onChangeProperty = checkedPropertValue => {
    setPropertyType(checkedPropertValue);
  };

  // Price data handling
  const handlePriceChange = setValue => {
    const maxValue = setValue ? setValue[1] : price.defaultMin;
    const minValue = setValue ? setValue[0] : price.defaultMax;
    setPrice({
      min: minValue,
      max: maxValue,
      defaultMin: price.defaultMin,
      defaultMax: price.defaultMax,
    });
  };

  // Date data handling
  const updateSearchDataFunc = setDateValue => {
    setSearchDate({
      setStartDate: setDateValue.setStartDate,
      setEndDate: setDateValue.setEndDate,
    });
  };

  const handleApplyFilter = () => {
    const search = setStateToUrl({
      amenities: amenities
    });
    history.push({
      pathname: '/listing',
      search: search,
    });
    setToggle(false);
  };

  const handleCloseDrawer = () => {
    const search = setStateToUrl({ reset: '' });
    setAmenities([]);
    history.push({
      pathname: '/listing',
      search: search,
    });
    setToggle(false);
  };

  return (
    <FilterArea>
      <Button className={toggle ? 'active' : ''} onClick={handleToggleDrawer}>
        More filters
      </Button>
      <Drawer
        className="filter_drawer"
        height="100vh"
        placement="bottom"
        closable={false}
        maskClosable={false}
        onClose={handleCloseDrawer}
        visible={toggle}
        maskStyle={{ backgroundColor: 'transparent' }}
      >
        <FilterElementsWrapper>
          <Accordion allowZeroExpanded={true}>
            {getAmenities.options.map(a => (
              <div className="view_with__popup">
                <div className="popup_handler">
                  {(amenities.includes(a.value)) ?
                    <AccordionItem>
                      <Button type="default" onClick={value => onChangeAmenity([a.value])} style={{ backgroundColor: '#CE181E', color: '#fff', width: '100%', margin: '10px 0px 0px', padding: '6px', height: 'auto' }}>
                        {a.label}
                      </Button>
                    </AccordionItem>
                    :
                    <AccordionItem>
                      <Button type="default" onClick={value => onChangeAmenity([a.value])} style={{ width: '100%', margin: '10px 0px 0px', padding: '6px', height: 'auto' }}>
                        {a.label}
                      </Button>
                    </AccordionItem>
                  }
                </div>
              </div>
            ))}
          </Accordion>

          <ButtonGroup>
            <Button onClick={handleCloseDrawer}>Cancel Filter</Button>
            <Button type="primary" onClick={handleApplyFilter}>
              Apply Filter
            </Button>
          </ButtonGroup>
        </FilterElementsWrapper>
      </Drawer>
    </FilterArea>
  );
};

export default FilterDrawer;
