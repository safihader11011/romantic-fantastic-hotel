import React, { useState, useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';
import { withRouter } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import MapAutoComplete from 'components/Map/MapAutoComplete';
import { setStateToUrl, getStateFromUrl } from 'library/helpers/url_handler';
import { MapDataHelper } from 'components/Map/MapLocationBox';
import { LISTING_POSTS_PAGE } from 'settings/constant';
import { NavbarSearchWrapper } from './Header.style';
import { getPackagesCount } from '../../../services/packages';
import Select from 'react-select';

const customStyles = {
  control: (base, state) => ({
    ...base,
    height: '50px',
  }),
  valueContainer: (base) => ({
    ...base,
    height: '50px',
    'padding-top': '0px'
  }),
  placeholder: (base) => ({
    ...base,
    top: '45%',
  }),
  singleValue: (base) => ({
    ...base,
    top: '45%',
  }),
  input: base => ({
    ...base,
    margin: 0,
    padding: 0
  })
};

const NavbarSearch = props => {
  const updatevalueFunc = value => {
    const { searchedPlaceAPIData } = value;
    let tempLocation = [];
    const mapData = !isEmpty(searchedPlaceAPIData)
      ? MapDataHelper(searchedPlaceAPIData)
      : [];
    if (!isEmpty(mapData) && mapData.length !== 0) {
      mapData.forEach(singleMapData =>
        tempLocation.push({
          lat: singleMapData ? singleMapData.lat.toFixed(3) : null,
          lng: singleMapData ? singleMapData.lng.toFixed(3) : null,
        })
      );
    }
    const searchLocation = tempLocation ? tempLocation[0] : {};
    if (!isEmpty(searchLocation)) {
      const state = getStateFromUrl(props.location);
      const query = {
        ...state,
        location: searchLocation,
      };
      const search = setStateToUrl(query);
      props.history.push({
        pathname: LISTING_POSTS_PAGE,
        search: search,
      });
    }
  };
  const [packageType, setPackageType] = useState(null)
  const [options, setOptions] = useState([]);

  let fetchPackagesCount = async () => {
    let temp = []
    let data = await getPackagesCount();
    if (data) {
      data.map(d => {
        temp.push({
          value: d.city,
          label: d.city
        })
      })
      setOptions(temp)
    }
  }

  useEffect(() => {
    fetchPackagesCount()
  }, [])

  let handleChange = packageType => {
    setPackageType(packageType)
    props.history.push({
      pathname: (packageType) ? '/listing/' + packageType.value : '/listing'
    });
  };

  return (
    <NavbarSearchWrapper className="navbar_search">
      <div style={{ width: '100%' }}>
        <Select
          styles={customStyles}
          value={packageType}
          onChange={handleChange}
          options={options}
          components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
          placeholder="Search, Dubai"
          isClearable={true}
        />
      </div>
      {/* <FiSearch /> */}
    </NavbarSearchWrapper>
  );
};

export default withRouter(NavbarSearch);
