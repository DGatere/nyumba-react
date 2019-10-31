import React from 'react';

import './Footer.css';
import Content from './Content/Content';
import Navigation from './Navigation/Navigation';

const Footer = () => {
    return (
        <footer className='footer'>
            <Content />
            <Navigation />
        </footer>
    );
};

export default Footer;
