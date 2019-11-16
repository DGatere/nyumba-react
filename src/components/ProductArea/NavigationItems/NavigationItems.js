import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import './NavigationItems.css';

const NavigationItems = props => (
    <nav className='nav-content'>
        <ul className='nav-tabs'>
            <li className='nav-tabs__list'>
                <NavLink to={props.match.url} exact className='nav-tabs__link'>
                    DESCRIPTION
                </NavLink>
            </li>
            <li className='nav-tabs__list'>
                <NavLink to={`${props.match.url}/partners`} className='nav-tabs__link'>
                    NYUMBA PARTNERS
                </NavLink>
            </li>
            <li className='nav-tabs__list'>
                <NavLink to={`${props.match.url}/properties`} exact className='nav-tabs__link '>
                    SIMILAR PROPERTIES
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default withRouter(NavigationItems);
