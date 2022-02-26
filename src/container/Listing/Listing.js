import React, { useState, useEffect, Fragment } from 'react';
import Sticky from 'react-stickynode';
import Toolbar from 'components/UI/Toolbar/Toolbar';
import Checkbox from 'components/UI/Antd/Checkbox/Checkbox';
import CategotySearch from 'components/Search/CategorySearch/CategotySearch';
import { PostPlaceholder } from 'components/UI/ContentLoader/ContentLoader';
import SectionGrid from 'components/SectionGrid/SectionGrid';
import ListingMap from './ListingMap';
import FilterDrawer from 'components/Search/MobileSearchView';
import useWindowSize from 'library/hooks/useWindowSize';
import useDataApi from 'library/hooks/useDataApi';
import { SINGLE_PACKAGE_PAGE } from 'settings/constant';
import Heading from 'components/UI/Heading/Heading';
import TextLink from 'components/UI/TextLink/TextLink';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { getPackages } from '../../services/packages';
import { getAmenities } from '../../components/Search/SearchParams';
import { getStateFromUrl } from '../../components/Search/url_handler';
import Loader from 'react-loader-spinner';
import _ from 'lodash';

import ListingWrapper, { PostsWrapper, ShowMapCheckbox } from './Listing.style';

export default function Listing({ location, history, match }) {
  const { width } = useWindowSize();
  const [showMap, setShowMap] = useState(false);
  const [data, setData] = useState(null);
  const [packageTypes, setPackageTypes] = useState(null);
  const [loading, setLoading] = useState(true);
  const searchParams = getStateFromUrl(location);

  let columnWidth = [1 / 1, 1 / 2, 1 / 3, 1 / 4, 1 / 5];

  let fetchPackages = async (data) => {
    let res = await getPackages(_.get(data, 'city'), _.get(data, 'type'));
    let res1 = await getAmenities();
    console.log(res1)
    if (res.results) {
      setData(res.results);
      setPackageTypes(res1)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPackages({ city: match.params.city, type: _.get(searchParams, 'amenities[0]') });
  }, [])

  if (showMap) {
    columnWidth = [1 / 1, 1 / 2, 1 / 2, 1 / 2, 1 / 3];
  }

  const handleMapToggle = () => {
    setShowMap(showMap => !showMap);
  };

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
        <ListingWrapper>
          <Sticky top={82} innerZ={999} activeClass="isHeaderSticky">
            <Toolbar
              left={
                width > 991 ? (
                  <CategotySearch history={history} location={location} match={match} packageTypes={packageTypes} />
                ) : (
                    <FilterDrawer history={history} location={location} match={match} packageTypes={packageTypes} />
                  )
              }
              right={
                null
                // <ShowMapCheckbox>
                //   <Checkbox defaultChecked={false} onChange={handleMapToggle}>
                //     Show map
                //   </Checkbox>
                // </ShowMapCheckbox>
              }
            />
          </Sticky>

          <Fragment>
            <PostsWrapper className={width > 767 && showMap ? 'col-12' : 'col-24'}>
              <SectionTitle
                title={<Heading content="Packages" />}
              />
              {(data.filter(function (item) { return item.featured; }).length > 0) ?
                <SectionGrid
                  type="Package"
                  link={SINGLE_PACKAGE_PAGE}
                  columnWidth={columnWidth}
                  data={data.filter(function (item) { return item.featured; })}
                  placeholder={<PostPlaceholder />}
                  featured={true}
                />
                :
                null
              }

              {(data.filter(function (item) { return !item.featured; }).length > 0) ?
                <SectionGrid
                  type="Package"
                  link={SINGLE_PACKAGE_PAGE}
                  columnWidth={columnWidth}
                  data={data.filter(function (item) { return !item.featured; })}
                  placeholder={<PostPlaceholder />}
                />
                :
                null
              }

            </PostsWrapper>

            {showMap && <ListingMap />}
          </Fragment>
        </ListingWrapper>
      }
    </React.Fragment>
  );
}
