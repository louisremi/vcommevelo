import React from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Image from 'common/src/components/Image';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import SectionWrapper, {
  Container,
  ImageWrapper,
  TextWrapper,
} from './aboutUs.style';

import { aboutData } from 'common/src/data/Velo';

const AboutUs = () => {
  const { thumb_url, thumb_alt, title, text, text2, link, link_lbl } = aboutData;
  const setTitle = title => {
    return { __html: title };
  };

  return (
    <SectionWrapper id="apropos">
      <Container>
        <ImageWrapper>
          <Fade left>
            <Image src={thumb_url} alt={thumb_alt} />
          </Fade>
        </ImageWrapper>
        <TextWrapper>
          <Fade right>
            <Heading dangerouslySetInnerHTML={setTitle(title)} />
            <Text content={text} />
            <Text content={text2} />
            <a href={link} className="learn__more-btn">
              <span className="btn_text">{link_lbl}</span>
              <span className="next_arrow"></span>
            </a>
          </Fade>
        </TextWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default AboutUs;
