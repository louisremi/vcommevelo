import styled from 'styled-components';

import hexToRgb from '../../../utils/hexToRgb';
import { themeGet } from '@styled-system/theme-get';

const ContactFromWrapper = styled.div`
  display: flex;
  align-items: stretch;
  width: auto;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  @media (max-width: 990px) {
    padding: 0 20px;
  }
  @media (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    button {
      width: 100%;
    }
  }

  .email_input {
    flex-grow: 1;
    @media (max-width: 575px) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 20px;
    }
    &.is-material {
      &.is-focus {
        label {
          color: ${themeGet('colors.primary', '#171717')};
          font-size: 12px;
        }
      }
    }

    input[type=email] {
      height: 100%;
      background: #fff;
      font-size: 16px;
      font-weight: 500;
      color: #343d48;
      padding: 5px 15px;
      border-color: #dadada;
      border-style: solid;
      border-width: 2px;
      border-color: ${themeGet('colors.primary', '#171717')};
      border-radius: 10px;
      background-color: ${themeGet('colors.primaryUltraLight', '#171717')};
      height: 84px;
      @media (max-width: 575px) {
        height: 60px;
      }
    }

    label {
      font-size: 14px;
      color: #343d48;
      font-weight: 500;
      padding-left: 10px;
      top: 5px;
    }
  }

  .field-wrapper {
    height: 100%;
  }
  
  input[type=submit] {
    height: 60px;
    position: absolute;
    right: 12px;
    top: 12px;
    padding: 0 22px;
    border: none;
    border-radius: 6px;
    color: ${themeGet('colors.white')};
    font-weight: bold;
    cursor: pointer;
    background-color: ${themeGet('colors.primary', '#171717')};
    &:hover {
      background-color: ${themeGet('colors.primaryDark', '#171717')};
    }
    @media (max-width: 990px) {
      right: 40px;
    }
    @media (max-width: 575px) {
      position: relative;
      right: 0;
      top: 0;
      height: 48px;
    }
  }
`;

const PanelsWrapper = styled.div`
  display: table;
  width: 200%;
  transition: margin-left 350ms;

  &.subscribed {
    margin-left: -100%;
  }

  .panel {
    display: table-cell;
    width: 50%;
  }
}
`;

const SectionMainWrapper = styled.div`
  margin: 80px 0 -150px;
  z-index: 1;
  position: relative;
  overflow-x: hidden;
  @media (max-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media (max-width: 480px) {
    padding-left: 15px;
    padding-right: 15px;
  }
  .containerClass {
    border-radius: 20px;
    background-color: ${themeGet('colors.white', '#FFF')};
    box-shadow: 0px 0px 94px 6px rgba(${hexToRgb(themeGet('colors.primaryDark', '#FFF'))}, 0.2);
    padding: 60px 0;

    .follow {
      margin-top: 25px;
      text-align: center;
      @media (max-width: 990px) {
        padding: 0 20px;
      }

      ul {
        padding-left: 20px;
      }

      a {
        color: ${themeGet('colors.black')}
      }

      a:hover {
        color: ${themeGet('colors.primary')}
      }
    }
  } 

  .subscribedMessage {
    padding: 0 20px;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    color: ${themeGet('colors.inactive')};
  }
`;
export { SectionMainWrapper, PanelsWrapper };

export default ContactFromWrapper;
