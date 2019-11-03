import React from 'react';

import './Partners.css';
import PartnerAvatar from './PartnerAvatar/PartnerAvatar';
import PartnerLinks from './PartnerLinks/PartnerLinks';

const Partners = ({ partner }) => (
    <div className='profile-details'>
        <PartnerAvatar avatar={partner.avatar} />
        <PartnerLinks name={partner.name} services={partner.services} />
    </div>
);

export default Partners;
