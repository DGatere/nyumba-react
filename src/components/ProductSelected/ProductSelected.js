import React from 'react';

import './ProductSelected.css';

const ProductSelected = () => (
    <section className='product-selected'>
        <h3 className='product__text '>
            Apartments for rent in Nairobi, Lower Kabete Road, Nairobi, Kenya
        </h3>
        <div>
            <span className='btn product-price_red'>Ksh 190,000.00/month</span>
            <span className='btn btn-selected btn-selected_gold'>featured</span>
            <span className='btn btn-selected'>for sale</span>
            <span className='btn btn-selected'>residential</span>
        </div>
    </section>
);

export default ProductSelected;
