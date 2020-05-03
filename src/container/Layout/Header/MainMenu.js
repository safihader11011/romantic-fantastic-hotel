import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Menu from 'components/UI/Antd/Menu/Menu';

import {
  HOME_PAGE,
  LISTING_POSTS_PAGE,
  THINGS_TO_DO
} from 'settings/constant';

const MainMenu = ({ className }) => {
  return (
    <Menu className={className}>
      <Menu.Item key="0">
        <NavLink exact to={`${HOME_PAGE}`}>
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item key="1">
        <NavLink to={`${LISTING_POSTS_PAGE}`}>Packages</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to={`${THINGS_TO_DO}`}>Things to do</NavLink>
      </Menu.Item>
      {/* <Menu.Item key="2">
        <NavLink to={`${AGENT_PROFILE_PAGE}`}>Agent</NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to={`${PRICING_PLAN_PAGE}`}>Pricing</NavLink>
      </Menu.Item> */}
    </Menu>
  );
};

export default MainMenu;
