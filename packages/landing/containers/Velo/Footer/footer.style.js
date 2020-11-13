import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 70px 0 40px;
  background-color: ${themeGet('colors.primary', '#171717')};

  .col-one {
    .logo {
      width: 200px;
      margin-bottom: 20px;
    }
  }

  .widget_title {
    color: ${themeGet('colors.white', '#C6C6C6')};
    font-size: 14px;
    margin-bottom: 16px;
  }

  .text {
    color: ${themeGet('colors.white', '#C6C6C6')};
    font-size: 14px;
    margin-bottom: 9px;
  }

  .copyright {
    width: 100%;
    margin-top: 81px;
    padding-top: 30px;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #212121;
    @media only screen and (max-width: 480px) {
      justify-content: center;
      margin-top: 10px;
      padding-top: 25px;
      flex-direction: column;
    }

    p {
      color: #464646;
      margin: 0;

      svg {
        margin-left: 10px;
      }
    }
  }
`;

export const CurvIcon = styled.div`
  background-color: ${themeGet('colors.white', '#fbfafe')};

  svg {
    width: 100%;
    margin-bottom: -5px;
    fill: ${themeGet('colors.primary', '#171717')};
  }
`;

export const List = styled.ul`
  width: 100%;
`;

export const ListItem = styled.li`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${themeGet('colors.white', '#7E7E7E')};

  a {
    font-size: 14px;
    line-height: 35px;
    transition: all 0.3s ease;
    color: inherit;

    &:hover,
    &:focus {
      outline: 0;
      text-decoration: none;
      color: ${themeGet('colors.inactive', '#EBEBEB')};
      padding-left: 5px;
    }
  }
`;

export default FooterWrapper;
