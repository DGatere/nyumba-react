import React from 'react';

import './NavItems.css';

const NavItems = ({ items }) => (
    <ul className='footer-items'>
        <li className='footer-list__item'>{items.metrics}</li>
        <li>{items.description}</li>
        <li className='footer-list_pad'>
            <a href='# ' className='footer__link'>
                {items.link}
            </a>
        </li>
    </ul>
);

export default NavItems;
