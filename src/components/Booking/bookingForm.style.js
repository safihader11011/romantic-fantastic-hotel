import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const ComponentWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  border: 1px solid #ced4da;
  border-radius: .25rem;

  .target {
    right: 10px;
    left: auto;

    @media only screen and (max-width: 480px) {
      right: 25px;
    }
  }

  /* date picker style */
  .date_picker {
    min-width: calc(250px - 14px);
    width: calc(100% - 14px);
    margin: 0 0 0 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38px;

    @media only screen and (max-width: 991px) {
      justify-content: flex-start;
    }

    @media only screen and (max-width: 480px) {
    //   height: 47px;
    }

    .DayPicker__withBorder {
      box-shadow: 0 15px 46px -10px rgba(26, 26, 29, 0.3);
    }

    .SingleDatePicker {
      display: block;
      width: 100%;

      .SingleDatePickerInput {
        border: 0;
        padding-right: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: transparent;

        .SingleDatePickerInput_clearDates,
        .SingleDatePickerInput_clearDates {
          &.SingleDatePickerInput_clearDates__small {
            display: none;
          }
        }

        .DateInput {
          width: 100%;
          padding: 0 15px 0 30px;
          background: transparent;

          @media only screen and (min-width: 569px) and (max-width: 991px) {
            padding: 0 25px 0 30px;
          }

          @media only screen and (max-width: 568px) {
            padding: 0 15px 0 25px;
          }

          .DateInput_fang {
            display: none;
          }

          .DateInput_input {
            padding: 0;
            font-weight: 400;
            color: ${themeGet('text.0', '#2C2C2C')};
            background: transparent;

            &.DateInput_input__focused {
              border-color: transparent;
            }

            &::placeholder {
              color: ${themeGet('text.0', '#2C2C2C')};
            }
          }
        }

        .SingleDatePickerInput_arrow {
          & + .DateInput {
            input {
              text-align: right;
            }
          }
        }
      }

      .SingleDatePicker_picker {
        margin-top: -12px;
        z-index: 2;

        @media only screen and (max-width: 991px) {
          top: 47px !important;
        }

        @media only screen and (max-width: 320px) {
          left: -29px !important;
          .DayPicker,
          .DayPicker > div > div,
          .DayPicker > div > div .DayPicker_transitionContainer {
            width: 294px !important;
          }

          .DayPicker {
            .DayPicker_weekHeader {
              padding: 0 !important;
            }

            .CalendarMonth {
              padding: 0 !important;
            }
          }
        }
      }
    }
  }

  /* icon style */
  > svg {
    position: absolute;
    z-index: 1;
    top: auto;
    &.map-marker,
    &.calendar,
    &.user-friends {
      left: 15px;
      right: auto;
      fill: ${themeGet('primary.0', '#CE181E')};
    }

    &.calendar {
      @media only screen and (max-width: 480px) {
        width: 14px;
        height: 14px;
      }
    }

    &.user-friends {
      width: 17px;
      height: 17px;
      @media only screen and (max-width: 480px) {
        width: 16px;
        height: 16px;
      }
    }

    &.caret-down {
      right: 12px;
      left: auto;
      fill: ${themeGet('text.1', '#909090')};

      @media only screen and (max-width: 991px) {
        right: 20px;
      }

      @media only screen and (max-width: 991px) {
        right: 15px;
      }
    }
  }
`;