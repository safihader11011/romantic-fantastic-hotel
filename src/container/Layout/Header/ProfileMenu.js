import React, { useContext, useState, useRef } from 'react';
import Menu from 'components/UI/Antd/Menu/Menu';
import useOnClickOutside from 'library/hooks/useOnClickOutside';
import { NavLink, withRouter } from 'react-router-dom';
import { AuthContext } from 'context/AuthProvider';
import Cookies from 'js-cookie';
import Text from 'components/UI/Text/Text';

import {
  AGENT_PROFILE_PAGE,
  AGENT_ACCOUNT_SETTINGS_PAGE,
  ADD_HOTEL_PAGE,
} from 'settings/constant';

const ProfileMenu = ({ avatar, history }) => {
  const { logOut } = useContext(AuthContext);
  const [state, setState] = useState(false);

  const handleDropdown = () => {
    setState(!state);
  };

  const closeDropdown = () => {
    setState(false);
  };

  const dropdownRef = useRef(null);
  useOnClickOutside(dropdownRef, () => setState(false));

  function handleLogout() {
    logOut();
    history.push('/');
  }

  const user = Cookies.get('user');

  return (
    <div className="avatar-dropdown" ref={dropdownRef}>
      <div className="dropdown-handler" onClick={handleDropdown}>
        {avatar}
      </div>

      <Menu className={`dropdown-menu ${state ? 'active' : 'hide'}`}>
        <Menu.Item onClick={closeDropdown} key="0">
          <h3>{user}</h3>
        </Menu.Item>
        {/* <Menu.Item key="3">
          <button onClick={handleLogout}>Log Out</button>
        </Menu.Item> */}
      </Menu>
    </div>
  );
};

export default withRouter(ProfileMenu);
