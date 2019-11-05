import React from 'react';

import './PartnerLinks.css';
import PartnerLink from './PartnerLink/PartnerLink';
import Social from '../../../Profile/Social/Social';

const PartnerLinks = ({ name, services }) => (
    <div>
        <p className='avatar-text avatar-text_bold'>{name}</p>
        <ul className='partner-profile__items'>
            {services.map(service => (
                <PartnerLink key={Math.random()} service={service} />
            ))}
        </ul>
        <Social />
    </div>
);

export default PartnerLinks;
