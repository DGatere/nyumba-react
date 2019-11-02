import React from 'react';

import './ProductInfo.css';
import Description from './Description/Description';
import Features from './Features/Features';
import Location from './Location/Location';

const ProductInfo = ({ show }) => (
    <div className={`property ${show ? 'show' : ''}`}>
        <Description />
        <div className='product-amenities'>
            <h4>Amenities</h4>
            <div>
                <Features />
            </div>
        </div>
        <Location />
    </div>
);

export default ProductInfo;
