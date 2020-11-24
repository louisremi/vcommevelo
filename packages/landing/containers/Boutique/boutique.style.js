import styled from 'styled-components';
// import { themeGet } from '@styled-system/theme-get';

const BoutiqueWrapper = styled.div`
`;

export const Container = styled.div`
  max-width: 1627px;
  margin: 180px auto;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1700px) {
    padding: 0 70px;
  }
  @media only screen and (max-width: 1360px) {
    padding: 0 30px;
  }
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ProductsWrapper = styled.div`
  width: calc(100% - 507px);
  padding-right: 75px;
  position: relative;
  @media only screen and (max-width: 1200px) {
    width: 60%;
    padding-right: 50px;
  }
  @media only screen and (max-width: 991px) {
    padding-right: 0;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
    padding-right: 0;
    margin-bottom: 30px;
    transform: rotateY(-180deg);
  }

  .service_section {
    background: linear-gradient(
      to bottom,
      #ffffff 0%,
      #f9fbfd 50%,
      #f9fbfd 100%
    );

    .service_col {
      border-width: 1px 0 0 1px;
      border-style: solid;
      border-color: #f1f4f6;
      &:nth-child(3n + 3),
      &:last-child {
        border-right-width: 1px;
      }
      &:nth-last-child(-n + 3) {
        border-bottom-width: 1px;
      }
      .service_item {
        position: relative;
        height: 100%;
        transition: 0.2s ease-in-out;

        &:hover {
          box-shadow: 0 40px 90px -30px rgba(39, 79, 117, 0.2);
          z-index: 1;
        }

        &:before {
          content: '';
          position: absolute;
          width: 85%;
          height: 0;
          bottom: 0;
          left: 50%;
          display: block;
          pointer-events: 0;
          transform: translateX(-50%);
        }
        &:hover {
          &:before {
            box-shadow: 0px 0px 60px 0px rgba(39, 79, 117, 0.2);
          }
        }

        img {
          width: 80px;
          height: 70px;
        }
      }
    }
  }
`;

export const FiltersWrapper = styled.div`
  width: 507px;
  align-self: flex-start;

  @media only screen and (max-width: 991px) {
    padding-left: 50px;
  }
  @media only screen and (max-width: 767px) {
    padding-left: 0;
    width: 100%;
  }
`;

export default BoutiqueWrapper;
