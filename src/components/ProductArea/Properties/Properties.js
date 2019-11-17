import React from 'react';
import Product from '../../Products/Featured/Product/Product';

import classes from './Properties.module.css';

const Properties = () => (
    <div className={classes.ProductGrid}>
        <div className={classes.ProductImageContainer}>
            <Product className={classes.ProductImage} />
            <Product className={classes.ProductImage} />
        </div>
        <div className={classes.ProductImageContainer}>
            <Product className={classes.ProductImage} />
            <Product className={classes.ProductImage} />
        </div>
    </div>
);

export default Properties;
