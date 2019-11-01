import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const descriptions = ['DESCRIPTION', 'NYUMBA PARTNERS', 'SIMILAR PROPERTIES'];

const NavigationItems = props => (
    <nav className='nav-content'>
        <ul className='nav-tabs'>
            {descriptions.map(description => (
                <NavigationItem key={Math.random()} desc={description} />
            ))}
        </ul>
    </nav>
);

export default NavigationItems;
