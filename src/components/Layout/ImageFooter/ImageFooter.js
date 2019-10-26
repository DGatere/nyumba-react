import React from 'react';

import './ImageFooter.css';
import Content from './Content/Content';
import Navigation from './Navigation/Navigation';

const ImageFooter = () => {
    return (
        <footer className='footer'>
            <Content />
            <Navigation />
        </footer>
    );
};

export default ImageFooter;
