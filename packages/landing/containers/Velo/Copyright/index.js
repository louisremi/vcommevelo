import React from 'react';

import Text from 'common/src/components/Text';
import CopyrightWrapper from './copyright.style';
import { SocialList } from '../Footer/footer.style';

import { footerData } from 'common/src/data/Velo';

const Copyright = () => {
  const { socialLinks } = footerData;

  return (
    <CopyrightWrapper className="copyright_section">
      <SocialList>
          {socialLinks.map((item, id) => (
            <li className={item.name} key={`link-key${id}`}>
              <a href={item.link} aria-label={item.name}>{item.icon}</a>
            </li>
          ))}
        </SocialList>
      <Text content={`Copyright ${new Date().getFullYear()} @VcommeVelo`} />
    </CopyrightWrapper>
  );
};

export default Copyright;
