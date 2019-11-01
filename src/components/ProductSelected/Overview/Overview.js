import React from 'react';

import './Overview.css';
import ProductSelected from '../ProductSelected';

const Overview = () => (
    <>
        <section className='product-overview'>
            <div className='product-details'>
                <h1 className='product-detail_large-white'>Home/Property Details</h1>
            </div>
        </section>
        <ProductSelected />
    </>
);

export default Overview;
