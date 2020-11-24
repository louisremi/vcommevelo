import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import FeatureBlock from 'common/src/components/FeatureBlock';

import { productsData } from 'common/src/data/Velo';

const Products = ({
  sectionWrapper,
  row,
  col,
  featureItemHeading,
  featureItemDes,
  featureBlockStyle,
  iconStyle,
  contentStyle,
}) => {
  return (
    <Box {...sectionWrapper}>
      <Container>
        <Box {...row}>
          {productsData.map((featureItem, index) => (
            <Box {...col} key={`service-${index}`}>
              <FeatureBlock
                wrapperStyle={featureBlockStyle}
                iconStyle={iconStyle}
                contentStyle={contentStyle}
                title={
                  <Heading
                    {...featureItemHeading}
                    content={featureItem.title}
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    content={featureItem.description}
                  />
                }
                icon={<Image src={featureItem.icon} alt={`icon-${index}`} />}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

Products.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  featureItemHeading: PropTypes.object,
  featureItemDes: PropTypes.object,
  featureBlockStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  contentStyle: PropTypes.object,
};

Products.defaultProps = {
  sectionWrapper: {
    id: 'service_section',
    as: 'section',
    pt: ['60px', '80px', '80px', '80px'],
    pb: ['60px', '0', '80px', '0'],
    className: 'service_section',
    id: 'service_section',
  },
  secTitleWrapper: {
    mb: ['50px', '60px', '60px', '75px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#eb4d4b',
    mb: '10px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    className: 'service_col',
    bg: '#fff',
  },
  featureBlockStyle: {
    p: '45px 55px',
    className: 'service_item',
  },
  iconStyle: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    mb: '45px',
  },
  contentStyle: {
    textAlign: 'center',
  },
  featureItemHeading: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: '20px',
    letterSpacing: '-0.020em',
  },
  featureItemDes: {
    fontSize: '15px',
    lineHeight: '1.84',
    color: '#343d48cc',
    mb: '0',
  },
};

export default Products;
