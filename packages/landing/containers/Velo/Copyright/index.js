import React from 'react';
import SocialList from '../SocialList';

import Text from 'common/src/components/Text';
import CopyrightWrapper from './copyright.style';

const Copyright = () => {
  return (
    <CopyrightWrapper className="copyright_section">
      <SocialList />
      <Text content={`Copyright ${new Date().getFullYear()} @VcommeVelo`} />
    </CopyrightWrapper>
  );
};

export default Copyright;
