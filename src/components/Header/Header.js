import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import Toolbar from './Toolbar/Toolbar';

const Header = props => (
    <header className='header'>
        <Toolbar click={props.toggle} />
        <div className='logo'>
            <Link to='/'>
                <img src={require('../../assets/images/nyumba_logo.png')} alt='logo' />
            </Link>
        </div>
        <nav className='header-nav'>
            <ul className='header-nav__items'>
                <li className='header-nav__item'>
                    <Link to='/property' className='header-nav__link_grey'>
                        Hot Properties
                    </Link>
                </li>
                <li className='header-nav__item'>
                    <Link to='/property' className='header-nav__link_grey'>
                        View Properties
                    </Link>
                </li>
                <li className='header-nav__item '>
                    <Link to='/property' className='header-nav__link_golden-border'>
                        Be A Partner
                    </Link>
                </li>
                <li className='header-nav__item'>
                    <Link to='/property' className='header-nav__link_theme-gold'>
                        Sell Property
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;
