import React from 'react';

import './Overview.css';
import ProductSelector from './ProductSelector/ProductSelector';

const Overview = () => {
    return (
        <section className='product-overview__landing'>
            <ProductSelector />
        </section>
    );
};

export default Overview;
