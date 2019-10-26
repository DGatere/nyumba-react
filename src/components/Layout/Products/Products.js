import React from 'react';

import './Products.css';
import Navigation from './Navigation/Navigation';
import FeaturedContent from './Featured/Featured';

const Products = () => {
    return (
        <>
            <div className='featured-product__content'>
                <h3 className='featured-product__header'>Featured Properties</h3>
                <h5 className='featured-product__header_grey'>Find properties around your city</h5>
            </div>
            <Navigation />
            <FeaturedContent />
            <div className='featured-product__content'>
                <h3 className='featured-product__header'>Recently Added Properties</h3>
            </div>
            <FeaturedContent />
        </>
    );
};

export default Products;
