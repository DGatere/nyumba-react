import React from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to='/property' className='side-drawer__link'>
                        Hot Properties
                    </Link>
                </li>
                <li className='side-drawer__item'>
                    <Link to='/property' className='side-drawer__link'>
                        View Properties
                    </Link>
                </li>
                <li className='side-drawer__item'>
                    <Link to='/property' className='side-drawer__link'>
                        Be A Partner
                    </Link>
                </li>
                <li className='side-drawer__item'>
                    <Link to='/property' className='side-drawer__link'>
                        Sell Property
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default SideDrawer;
