import React from 'react';

import './Service.css';

const Service = ({ service }) => (
    <li className='partner-profile__item'>
        <a href='# ' className='partner-profile__link'>
            {service}
        </a>
    </li>
);

export default Service;
