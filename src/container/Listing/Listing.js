import React, { useState, Fragment } from 'react';
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

import ListingWrapper, { PostsWrapper, ShowMapCheckbox } from './Listing.style';

export default function Listing({ location, history }) {
  let url = '/data/packages.json';
  const { width } = useWindowSize();
  const [showMap, setShowMap] = useState(false);
  const { data, loading, loadMoreData, total, limit } = useDataApi(url);
  let columnWidth = [1 / 1, 1 / 2, 1 / 3, 1 / 4, 1 / 5];

  if (location.search) {
    url += location.search;
  }

  if (showMap) {
    columnWidth = [1 / 1, 1 / 2, 1 / 2, 1 / 2, 1 / 3];
  }

  const handleMapToggle = () => {
    setShowMap(showMap => !showMap);
  };

  return (
    <ListingWrapper>
      <Sticky top={82} innerZ={999} activeClass="isHeaderSticky">
        <Toolbar
          left={
            width > 991 ? (
              <CategotySearch history={history} location={location} />
            ) : (
                <FilterDrawer history={history} location={location} />
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
            title={<Heading content="Featured Packages" />}
          />
          <SectionGrid
            type="Package"
            link={SINGLE_PACKAGE_PAGE}
            columnWidth={columnWidth}
            data={data.filter(function (item) {
              return item.featured;
            })}
            placeholder={<PostPlaceholder />}
          />

          <SectionTitle
            title={<Heading content="Other Packages" />}
          />
          <SectionGrid
            type="Package"
            link={SINGLE_PACKAGE_PAGE}
            columnWidth={columnWidth}
            data={data.filter(function (item) {
              return !item.featured;
            })}
            placeholder={<PostPlaceholder />}
          />

        </PostsWrapper>

        {showMap && <ListingMap />}
      </Fragment>
    </ListingWrapper>
  );
}
