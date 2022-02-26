import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const FormWrapper = styled.div`
  .field-container {
    .ant-form-item {
      .ant-form-item-label {
        label {
          font-size: 15px;
          font-weight: 700;
          color: ${themeGet('text.0', '#2C2C2C')};
          line-height: 1;
        }
      }
      .ant-form-item-control-wrapper {
        .ant-form-item-control {
          line-height: 35px;
          input {
            &:focus {
              box-shadow: none;
            }
          }
          .ant-form-explain {
            margin: 5px 0 10px;
          }
        }
      }
    }
    .termsAndConditions {
      .ant-form-explain {
        margin: -5px 0 0 !important;
      }
    }
  }
`;

export const FieldWrapper = styled.div`
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  // margin-top: 21px;
  margin-bottom: 21px;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  > a {
    color: ${themeGet('primary.0', '#CE181E')};
    font-size: 15px;
    font-weight: 700;
    line-height: 1;
    &:hover,
    &:focus {
      outline: none;
      color: #CE181Ed1;
      text-decoration: none;
    }
  }
`;

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    margin: 7px 0;
  }

  .field-container {
    .ant-form-item {
      margin-bottom: 0;
      margin-right: 10px;
    }
    .ant-form-item-control {
      > div {
        &.ant-form-explain {
          position: absolute;
          width: 22vw;
          margin: 3px 0 10px;
        }
      }
    }
  }

  .ant-switch {
    min-width: 20px;
    height: 16px;
    &.ant-switch-checked {
      background-color: ${themeGet('primary.0', '#CE181E')};
    }
    &::after {
      width: 12px;
      height: 12px;
    }
    &:focus {
      box-shadow: none;
    }
    .ant-click-animating-node {
      display: none;
    }
  }
`;

export const Label = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: ${themeGet('text.0', '#2C2C2C')};
  line-height: 1;
`;

export default FormWrapper;
