import React from 'react';

import SocialListWrapper from './socialList.style';
import { socialData } from 'common/src/data/Velo';

export default function SocialList() {
    return (
        <SocialListWrapper>
            {socialData.map((item, id) => (
                <li className={item.name} key={`link-key${id}`}>
                    <a href={item.link} aria-label={item.name}>{item.icon}</a>
                </li>
            ))}
        </SocialListWrapper>
    )
}