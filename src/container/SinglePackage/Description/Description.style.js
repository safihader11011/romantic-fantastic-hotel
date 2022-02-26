import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
const DescriptionWrapper = styled.div`
  padding: 0 0 29px;

  // button {
  //   font-size: 15px;
  //   font-weight: 700;
  //   border: 0;
  //   padding: 0;
  //   height: auto;
  //   line-height: 1;
  //   box-shadow: none;
  //   text-shadow: none;
  //   color: ${themeGet('primary.0', '#CE181E')};

  //   &:hover,
  //   &:focus {
  //     color: ${themeGet('primary.1', '#399C9F')};
  //   }

  //   &::after {
  //     content: none;
  //   }
  // }


  /* button style */
  button {
    &.ant-btn {
      flex-shrink: 0;
      &.ant-btn-primary {
        height: 37px;
        min-width: 133px;
        border-color: ${themeGet('primary.0', '#CE181E')};
        background-color: ${themeGet('primary.0', '#CE181E')};
        text-shadow: none;
        font-size: 15px;
        font-weight: 700;
        border-radius: 3px;
        line-height: 1;
        float: right;
        margin-bottom: 20px;
      }
    }
  }
`;

export default DescriptionWrapper;
