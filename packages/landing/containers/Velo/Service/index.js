import React from 'react';
import Fade from 'react-reveal/Fade';
import Heading from 'common/src/components/Heading';
import BlogPost from 'common/src/components/BlogPost';
import Container from 'common/src/components/UI/Container';
import { SectionHeader } from '../velo.style';
import SectionWrapper, { ServiceWrapper } from './service.style';

import { serviceData } from 'common/src/data/Velo/';

const Feature = () => {
  const { title, slogan, services } = serviceData;

  return (
    <SectionWrapper id="services">
      <Fade bottom>
        <SectionHeader>
          <Heading as="h5" content={title} />
          <Heading content={slogan} />
        </SectionHeader>
      </Fade>
      <Container width="1360px">
        <Fade bottom delay={30}>
          <ServiceWrapper>
            {services.map((item, id) => (
              <BlogPost
                key={`service_key${id}`}
                thumbUrl={item.icon}
                title={item.title}
                excerpt={item.description}
                link={item.link}
              />
            ))}
          </ServiceWrapper>
        </Fade>
      </Container>
    </SectionWrapper>
  );
};

export default Feature;
