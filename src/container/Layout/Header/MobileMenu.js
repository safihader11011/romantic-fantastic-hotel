import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Menu from 'components/UI/Antd/Menu/Menu';
import { AuthContext } from 'context/AuthProvider';
import {
  HOME_PAGE,
  LISTING_POSTS_PAGE,
  THINGS_TO_DO
} from 'settings/constant';

const MobileMenu = ({ className }) => {
  // auth context
  const { loggedIn, logOut } = useContext(AuthContext);

  return (
    <Menu className={className}>
      <Menu.Item key="0">
        <NavLink exact to={HOME_PAGE}>
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item key="1">
        <NavLink to={LISTING_POSTS_PAGE}>Packages</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to={`${THINGS_TO_DO}`}>Things to do</NavLink>
        {/* <Link to={`${HOME_PAGE}#Services`}> Things to do</Link> */}
      </Menu.Item>
      {/* <Menu.Item key="2">
        <NavLink to={PRICING_PLAN_PAGE}>Pricing</NavLink>
      </Menu.Item>
      {loggedIn && (
        <Menu.Item key="3">
          <NavLink to={AGENT_ACCOUNT_SETTINGS_PAGE}>Account Settings</NavLink>
        </Menu.Item>
      )} */}
      {loggedIn && (
        <Menu.Item key="4">
          <button onClick={logOut}>Log Out</button>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default MobileMenu;
