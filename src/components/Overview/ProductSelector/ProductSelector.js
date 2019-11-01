import React from 'react';

import './ProductSelector.css';
import Form from './Form/FilterPropertyForm';

const ProductSelector = () => (
    <div className='product-selector'>
        <h1 className='product-description_white-text product-description_size-large'>
            BUY RENT AND MAKE IT
        </h1>
        <h1 className='product-description_size-large'>A REALITY</h1>
        <h5 className='product-description_white-text product-description_padding'>
            Get partners along the way and get a home
        </h5>
        <Form />
    </div>
);

export default ProductSelector;
