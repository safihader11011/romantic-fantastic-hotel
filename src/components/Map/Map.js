import React, { Fragment } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { compose, withProps, withHandlers, withStateHandlers } from 'recompose';
import MarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer';
import HotelMapMarkerCluster from './ListingPageMap';
import HotelMapMarkerSingle from './SinglePageMap';
import { MAPSTYLE } from './MapStyle';

export const MapLoadingElement = mapLoadingProps => {
  const { height } = mapLoadingProps;
  return <div style={{ height: height }} />;
};

export const mapRenderData = {
  googleMapURL: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  loadingElement: <MapLoadingElement height="100%" />,
  containerElement: <div style={{ height: `400px` }} />,
  mapElement: <div style={{ height: `400px` }} />,
};

export const MapDataProcessing = compose(
  withProps(mapRenderData),
  withHandlers({
    onMarkerClustererClick: () => markerClusterer => {
      const clickedMarkers = markerClusterer.getMarkers();
      console.log(`Current clicked markers length: ${clickedMarkers.length}`);
      console.log(clickedMarkers);
    },
  }),
  withStateHandlers(
    () => ({
      isOpen: false,
    }),
    {
      infoWindowToggle: ({ isOpen }) => index => ({
        isOpen: !isOpen,
        markerIndex: index,
      }),
    }
  ),
  withScriptjs,
  withGoogleMap
)(props => {
  const { multiple } = props;
  return (
    <Fragment>
      {multiple && multiple === true ? (
        <GoogleMap
          styles={MAPSTYLE}
          defaultZoom={5}
          defaultCenter={{
            lat: 24.96054976,
            lng: 55.041589590,
          }}
        >
          <MarkerClusterer
            onClick={props.onMarkerClustererClick}
            averageCenter
            defaultEnableRetinaIcons={true}
            gridSize={60}
          >
            <HotelMapMarkerCluster {...props} />
          </MarkerClusterer>
        </GoogleMap>
      ) : (
        <GoogleMap
          styles={MAPSTYLE}
          defaultZoom={8}
          defaultCenter={{
            lat: 24.96054976,
            lng: 55.041589590,
          }}
        >
          <HotelMapMarkerSingle {...props} />
        </GoogleMap>
      )}
    </Fragment>
  );
});

const Map = props => {
  return <Fragment>{props.children}</Fragment>;
};

export default Map;
