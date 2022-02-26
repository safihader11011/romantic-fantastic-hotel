import React, { useContext,useState, useEffect } from 'react';
import { TopHotelsGrid, LuxaryHotelsGrid } from './Grid';
import SearchArea from './Search/Search';
import LocationGrid from './Location/Location';
import FeaturedPackages from './Featured/Featured'
import Welcome from './Welcome/Welcome'
import ThingsToDo from './ThingsToDo/ThingsToDo'
import { LayoutContext } from 'context/LayoutProvider';
import { Waypoint } from 'react-waypoint';
import Loader from 'react-loader-spinner';

const Home = () => {
  const [, dispatch] = useContext(LayoutContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

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
          {/* <LuxaryHotelsGrid /> */}
        </>
      }
    </React.Fragment>
  );
};

export default Home;
