import React from 'react';

import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <nav>
                <ul className='nav-location__items'>
                    <li className='nav-location__item nav-location__item_left_margin'>
                        <a href='# '>Nairobi</a>
                    </li>
                    <li className='nav-location__item'>
                        <a href='# '>Mombasa</a>
                    </li>
                    <li className='nav-location__item'>
                        <a href='# '>Kisumu</a>
                    </li>
                    <li className='nav-location__item'>
                        <a href='# ' className='search__item'>
                            <img
                                src={require('../../../assets/images/search.svg')}
                                className='search__icon'
                                alt='search-icon'
                            />
                            Search Location
                        </a>
                    </li>
                    <li className='nav-location__item_separate'>
                        <a className='nav-location__link' href='# '>
                            View All<i className='angle double right icon'></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
