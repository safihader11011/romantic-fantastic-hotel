import React from 'react';
import Sticky from 'react-stickynode';
import {
  FaceBookShare,
  TwitterShare,
  LinkedInShare,
  PinterestShare,
} from 'components/SocialShare/SocialShare';
import Button from 'components/UI/Antd/Button/Button';
import Menu from 'components/UI/Antd/Menu/Menu';
import Dropdown from 'components/UI/Antd/Dropdown/Dropdown';
import Favorite from 'components/UI/Favorite/Favorite';
import ScrollBar from 'components/UI/ScrollBar/ScrollBar';
import { TobBarWrapper, ButtonGroup } from '../SinglePackageView.style';

const topBarMenu = [
  {
    name: 'Overview',
    target: 'overview',
  },
  {
    name: 'Hotel',
    target: 'hotel',
  }
];

const SocialShareMenu = props => {
  return (
    <Menu>
      <Menu.Item>
        <TwitterShare {...props} />
      </Menu.Item>
      <Menu.Item>
        <FaceBookShare {...props} />
      </Menu.Item>
      <Menu.Item>
        <LinkedInShare {...props} />
      </Menu.Item>
      <Menu.Item>
        <PinterestShare {...props} />
      </Menu.Item>
    </Menu>
  );
};

const SideButtons = props => {
  return (
    <ButtonGroup>
      <Favorite className="ant-btn" content="Save" />
      <Dropdown
        placement="bottomRight"
        overlay={() => <SocialShareMenu {...props} />}
        overlayClassName="social_share_menu"
      >
        <Button className="ant-dropdown-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.309 15.537">
            <path
              d="M80.68,101.873,74.507,96.1a.316.316,0,0,0-.245-.105c-.193.009-.438.144-.438.35v2.9a.187.187,0,0,1-.158.179c-6.138.941-8.724,5.535-9.639,10.3-.035.188.219.363.337.214a11.158,11.158,0,0,1,9.275-4.7.216.216,0,0,1,.184.21v2.844a.375.375,0,0,0,.634.232l6.217-5.876a.483.483,0,0,0,.153-.368A.586.586,0,0,0,80.68,101.873Z"
              transform="translate(-63.271 -95.242)"
            />
          </svg>
          Share
        </Button>
      </Dropdown>
    </ButtonGroup>
  );
};

const TopBar = props => {
  const { title, shareURL, media } = props;
  return (
    <TobBarWrapper>
      <Sticky innerZ={9999} top={80} activeClass="isSticky">
        <ScrollBar
          menu={topBarMenu}
          // other={
          //   <SideButtons
          //     media={media}
          //     author={author}
          //     title={title}
          //     shareURL={shareURL}
          //   />
          // }
        />
      </Sticky>
    </TobBarWrapper>
  );
};

export default TopBar;
