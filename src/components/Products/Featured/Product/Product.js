import React from 'react';

import './Product.css';

const Product = () => {
    return (
        <div className='product__item'>
            <div className='product__img'>
                <div className='product__img-holder'>
                    <div className='featured'>featured</div>
                    <a href='# '>
                        <img
                            src={require('../../../../assets/images/office.jpg')}
                            alt='apartment'
                            className='product__img-item'
                        />
                    </a>
                </div>
            </div>
            <div className='product__content'>
                <h3 className='product__text'>
                    Apartments for rent in Nairobi, Lower Kabete Road, Nairobi
                </h3>
                <p className='product-price'>Ksh 190,000.00/month</p>
                <p className='product-duration'>5 days ago</p>
            </div>
        </div>
    );
};

export default Product;
