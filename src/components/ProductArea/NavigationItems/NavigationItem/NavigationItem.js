import React from 'react';

import './NavigationItem.css';

const NavigationItem = props => (
    <li className='nav-tabs__list'>
        <a href='# ' className='nav-tabs__link active'>
            {props.desc}
        </a>
    </li>
);

export default NavigationItem;
