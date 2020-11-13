import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Input from 'common/src/components/Input';
import Container from 'common/src/components/UI/Container';
import SocialList from '../SocialList';

import ContactFromWrapper, { SectionMainWrapper, PanelsWrapper } from './newsletter.style';
import { newsletterData } from 'common/src/data/Velo';

const Newsletter = ({
  row,
  contactForm,
  button,
  title
}) => {
  const { title: titleContent, confirmation, follow } = newsletterData;
  const [isLoading, setLoading] = useState(false);
  const [isSubscribed, setSubscribed] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    const url = 'https://b43f13e4.sibforms.com/serve/MUIEAALA45AQZPqs2u4j2l2DhBLNw5dHLL9h7rui5uf6UH1HcuX8kVfpZkbNnQ8HvF6IHJJnujkcQusE5CHQl-9AV8_N-aMZzuJ4PYY4cFZycTT23SuVIwy2sX3b6DI4YzsZiGM6rr-COAMY13rS3NysOxcBTH-usaSsU8DYEdBfimbzpI6PkxGDI4rL67kiT4OZyx0PZab_szgr?isAjax=1';
    const email = event.target.parentNode.querySelector('input[type=email]').value;
    const formData = new FormData();
    
    formData.append('EMAIL', email);
    formData.append('email_address_check', '');

    
    const json = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: formData,
    }).then((res) => res.json());

    setLoading(false);

    if ( json.success ) {
      setSubscribed(true);
    } else {
      alert(json.errors.EMAIL.replace('inof', 'info'))
    }
  }

  return (
    <SectionMainWrapper id="newsletterForm">
      <Box id="contact_section" as="section">
        <Container className="containerClass">
          <Box>
            <FeatureBlock
              title={<Heading content={titleContent} {...title} />}
            />
          </Box>
          <Box {...row}>
            <Box {...contactForm}>
              <PanelsWrapper className={isSubscribed ? 'subscribed' : ''}>
                <div className="panel">
                  <ContactFromWrapper>
                    <Input
                      inputType="email"
                      name="EMAIL"
                      placeholder="Votre adresse email"
                      iconPosition="right"
                      isMaterial={false}
                      className="email_input"
                      aria-label="email"
                    />
                    <input {...button} type="submit"
                      value="S'ABONNER"
                      disabled={isLoading}
                      onClick={handleSubmit}
                    />
                  </ContactFromWrapper>
                </div>
                <div className="panel">
                  <p className="subscribedMessage" aria-hidden="true">
                    { confirmation }
                  </p>
                </div>
              </PanelsWrapper>
              <Box className="follow">
                <Text
                  as="span"
                  content={follow}
                />
                <SocialList />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </SectionMainWrapper>
  );
};

Newsletter.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  contactForm: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  button: PropTypes.object,
  note: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  colornote: PropTypes.object,
};

Newsletter.defaultProps = {
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: `${2}`,
    letterSpacing: '0.15em',
    fontWeight: `${6}`,
    color: 'primary',
    mb: `${3}`,
  },
  secHeading: {
    textAlign: 'center',
    fontSize: [`${6}`, `${8}`],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: `${0}`,
  },
  row: {
    flexBox: true,
    justifyContent: 'center',
  },
  contactForm: {
    width: [1, 1, 1, 1 / 2],
  },
  note: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['25px', '25px', '30px', '30px', '45px'],
    textAlign: ['center', 'center'],
  },
  colornote: {
    fontSize: '16px',
    fontWeight: '500',
    color: 'rgb(106, 82, 253)',
    lineHeight: '28px',
    mb: ['25px', '25px', '30px', '30px', '45px'],
    textAlign: ['center', 'center'],
  },
  title: {
    mb: '20px',
    textAlign: ['center', 'center'],
  },
  description: {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '28px',
    mb: ['25px', '25px', '30px', '30px', '45px'],
    textAlign: ['center', 'center'],
  },
};

export default Newsletter;
