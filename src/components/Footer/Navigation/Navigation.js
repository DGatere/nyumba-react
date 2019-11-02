import React from 'react';

import './Navigation.css';
import NavItems from './NavItems/NavItems';

const navContent = [
    { metrics: '262k', description: 'listing for sales', link: 'Sell Property' },
    { metrics: '500k', description: 'listing for rent', link: 'Rent Property' },
    { metrics: '120k', description: 'Business Partners', link: 'Be a partner' }
];

const Navigation = () => {
    return (
        <nav>
            <ul className='footer-nav__items'>
                {navContent.map(navItems => (
                    <NavItems key={Math.random()} items={navItems} />
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
