import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Menu from 'components/UI/Antd/Menu/Menu';

import {
  HOME_PAGE,
  LISTING_POSTS_PAGE,
  THINGS_TO_DO
} from 'settings/constant';

const FooterMenu = () => {
  return (
    <Menu>
      <Menu.Item key="0">
        <NavLink to={`${HOME_PAGE}`}>Home</NavLink>
      </Menu.Item>
      <Menu.Item key="1">
        <NavLink to={`${LISTING_POSTS_PAGE}`}>Packages</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to={`${THINGS_TO_DO}`}>Things to do</NavLink>
        {/* <Link to={`${HOME_PAGE}#Services`}> Things to do</Link> */}
      </Menu.Item>
    </Menu>
  );
};

export default FooterMenu;
