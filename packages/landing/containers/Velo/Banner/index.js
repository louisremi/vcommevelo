import React, { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import Image from 'common/src/components/Image';
import GlideCarousel from 'common/src/components/GlideCarousel';
import GlideSlide from 'common/src/components/GlideCarousel/glideSlide';
import { CircleLoader } from '../velo.style';
import BannerWrapper, {
  Container,
  ContentArea,
  CarouselArea,
} from './banner.style';

import { bannerData } from 'common/src/data/Velo';

const Banner = () => {
  const { title, text, carousel } = bannerData;
  const glideOptions = {
    type: 'carousel',
    perView: 3,
    gap: 20,
    breakpoints: {
      1200: {
        perView: 2,
      },
      667: {
        perView: 2,
      },
      480: {
        perView: 1,
      },
    },
  };

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);

  const [state, setState] = useState({ email: '', valid: '' });
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return (
    <BannerWrapper>
      <Container>
        <ContentArea>
          <Fade bottom delay={30}>
            <Heading as="h1" content={title} />
            <Text content={text} />
            
            <AnchorLink href="#services" className="learn__more-btn">
                <span className="btn_text">NOS SERVICES</span>
                <span className="next_arrow"></span>
            </AnchorLink>
          </Fade>
        </ContentArea>
        {/* End of content section */}

        <CarouselArea>
          {loading ? (
            <GlideCarousel
              carouselSelector="interior_carousel"
              options={glideOptions}
              nextButton={<span className="next_arrow" />}
              prevButton={<span className="prev_arrow" />}
            >
              <Fragment>
                {carousel.map((item, id) => (
                  <GlideSlide key={`carousel_key${id}`}>
                    <Link href={item.link}>
                      <a className="item_wrapper">
                        <Image src={item.thumb_url} alt={item.title} />
                        <Heading as="h4" content={item.title} />
                      </a>
                    </Link>
                  </GlideSlide>
                ))}
              </Fragment>
            </GlideCarousel>
          ) : (
            <CircleLoader>
              <div className="circle"></div>
              <div className="circle"></div>
            </CircleLoader>
          )}
        </CarouselArea>
        {/* End of carousel section */}
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
