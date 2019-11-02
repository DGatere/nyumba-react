import React from 'react';

import './NavigationItems.css';

const NavigationItems = ({ display, show }) => (
    <nav className='nav-content'>
        <ul className='nav-tabs'>
            <li className='nav-tabs__list'>
                <a href='# ' onClick={display} className={`nav-tabs__link ${show ? '' : 'active'}`}>
                    DESCRIPTION
                </a>
            </li>
            <li className='nav-tabs__list'>
                <a href='# ' onClick={display} className={`nav-tabs__link ${show ? 'active' : ''}`}>
                    NYUMBA PARTNERS
                </a>
            </li>
            <li className='nav-tabs__list'>
                <a href='# ' className='nav-tabs__link '>
                    SIMILAR PROPERTIES
                </a>
            </li>
        </ul>
    </nav>
);

export default NavigationItems;
