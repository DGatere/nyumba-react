import React from 'react';

import './SideDrawer.css';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';

    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul className='side-drawer__items'>
                <li className='side-drawer__item'>
                    <a href='# ' className='side-drawer__link'>
                        Hot Properties
                    </a>
                </li>
                <li className='side-drawer__item'>
                    <a href='# ' className='side-drawer__link'>
                        View Properties
                    </a>
                </li>
                <li className='side-drawer__item'>
                    <a href='# ' className='side-drawer__link'>
                        Be A Partner
                    </a>
                </li>
                <li className='side-drawer__item'>
                    <a href='# ' className='side-drawer__link'>
                        Sell Property
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default SideDrawer;
