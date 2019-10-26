import React from 'react';

import './Layout.css';
import './Overview/Overview';
import Overview from './Overview/Overview';
import Products from './Products/Products';
import Instructions from './Instructions/Instructions';

const Layout = () => {
    return (
        <main>
            <Overview />
            <Products />
            <Instructions />
        </main>
    );
};

export default Layout;
