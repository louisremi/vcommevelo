import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SocialListWrapper = styled.ul`
  display: inline-block;
  margin-top: 7px;

  li {
    display: inline;
    margin-right: 30px;
    @media only screen and (max-width: 991px) {
      margin-right: 20px;
    }
    &:last-child {
      margin-right: 0;
    }

    a {
      align-items: center;
      justify-content: center;
      line-height: 1;
      color: ${themeGet('colors.white', '#7E7E7E')};
      position: relative;
      i {
        position: relative;
        z-index: 1;

        svg {
          width: 15px;
          height: auto;
        }
      }

      &:hover {
        color: ${themeGet('colors.primary', '#FDEF00')};
      }
    }
  }
`;

export default SocialListWrapper;