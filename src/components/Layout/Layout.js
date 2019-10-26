import React from 'react';

import './Layout.css';
import './Overview/Overview';
import Overview from './Overview/Overview';
import Products from './Products/Products';
import Instructions from './Instructions/Instructions';
import Partners from './Partners/Partners';
import Footer from './ImageFooter/ImageFooter';

const Layout = () => {
    return (
        <main>
            <Overview />
            <Products />
            <Instructions />
            <Partners />
            <Footer />
        </main>
    );
};

export default Layout;
