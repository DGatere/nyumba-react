import React from 'react';

import './Layout.css';
import './Overview/Overview';
import Overview from './Overview/Overview';
import Products from './Products/Products';
import Instructions from './Instructions/Instructions';
import Partners from './Partners/Partners';

const Layout = () => {
    return (
        <main>
            <Overview />
            <Products />
            <Instructions />
            <Partners />
        </main>
    );
};

export default Layout;
