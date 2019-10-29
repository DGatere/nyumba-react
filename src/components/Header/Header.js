import React from 'react';

import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <div>
                <button className='toggle-button'>
                    <span className='toggle-button__bar'></span>
                    <span className='toggle-button__bar'></span>
                    <span className='toggle-button__bar'></span>
                </button>
                <a href='# '>
                    <img src={require('../../assets/images/nyumba_logo.png')} alt='logo' />
                </a>
            </div>
            <nav className='header-nav'>
                <ul className='header-nav__items'>
                    <li className='header-nav__item'>
                        <a href='# ' className='header-nav__link_grey'>
                            Hot Properties
                        </a>
                    </li>
                    <li className='header-nav__item'>
                        <a href='# ' className='header-nav__link_grey'>
                            View Properties
                        </a>
                    </li>
                    <li className='header-nav__item '>
                        <a href='# ' className='header-nav__link_golden-border'>
                            Be A Partner
                        </a>
                    </li>
                    <li className='header-nav__item'>
                        <a href='# ' className='header-nav__link_theme-gold'>
                            Sell Property
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
