import React from 'react';

import './Layout.css';
import './Overview/Overview';
import Overview from './Overview/Overview';
import Products from './Products/Products';

const Layout = () => {
    return (
        <main>
            <Overview />
            <Products />
        </main>
    );
};

export default Layout;
