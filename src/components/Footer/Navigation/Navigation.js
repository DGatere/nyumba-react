import React from 'react';

import './Navigation.css';

const Navigation = () => {
    return (
        <nav>
            <ul className='footer-nav__items'>
                <ul className='footer-items'>
                    <li className='footer-list__item'>262k</li>
                    <li>listing for sales</li>
                    <li className='footer-list_pad'>
                        <a href='# ' className='footer__link'>
                            Sell Property
                        </a>
                    </li>
                </ul>
                <ul className='footer-items'>
                    <li className='footer-list__item'>500k</li>
                    <li>listing for rent</li>
                    <li className='footer-list_pad'>
                        <a href='# ' className='footer__link'>
                            Rent Property
                        </a>
                    </li>
                </ul>
                <ul className='footer-items'>
                    <li className='footer-list__item'>120k</li>
                    <li>Business Partners</li>
                    <li className='footer-list_pad'>
                        <a href='# ' className='footer__link'>
                            Be a partner
                        </a>
                    </li>
                </ul>
            </ul>
        </nav>
    );
};

export default Navigation;
