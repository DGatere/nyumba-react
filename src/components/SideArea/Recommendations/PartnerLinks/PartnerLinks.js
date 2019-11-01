import React from 'react';

import './PartnerLinks.css';
import PartnerLink from './PartnerLink/PartnerLink';

const PartnerLinks = ({ name, services }) => (
    <div>
        <p className='avatar-text avatar-text_bold'>{name}</p>
        <ul className='partner-profile__items'>
            {services.map(service => (
                <PartnerLink service={service} />
            ))}
        </ul>
        <div className='social'>
            <i className='envelope icon'></i>
            <i className='phone square icon'></i>
            <i className='twitter icon'></i>
            <i className='facebook f icon'></i>
            <i className='instagram icon'></i>
        </div>
    </div>
);

export default PartnerLinks;
