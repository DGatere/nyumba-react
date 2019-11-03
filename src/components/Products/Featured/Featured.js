import React from 'react';

import './Featured.css';
import Product from './Product/Product';

const Featured = () => {
    return (
        <div className='product-content__row'>
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    );
};

export default Featured;
