import React, { useContext } from 'react';
import { TopHotelsGrid, LuxaryHotelsGrid } from './Grid';
import SearchArea from './Search/Search';
import LocationGrid from './Location/Location';
import FeaturedPackages from './Featured/Featured'
import Welcome from './Welcome/Welcome'
import ThingsToDo from './ThingsToDo/ThingsToDo'
import { LayoutContext } from 'context/LayoutProvider';
import { Waypoint } from 'react-waypoint';

const Home = () => {
  const [, dispatch] = useContext(LayoutContext);
  return (
    <>
      <SearchArea />
      <Waypoint
        onEnter={() => dispatch({ type: 'HIDE_TOP_SEARCHBAR' })}
        onLeave={() => dispatch({ type: 'SHOW_TOP_SEARCHBAR' })}
      />
      <Welcome />
      <ThingsToDo />
      <LocationGrid />
      {/* <TopHotelsGrid /> */}
      <FeaturedPackages />
      <LuxaryHotelsGrid />
    </>
  );
};

export default Home;
