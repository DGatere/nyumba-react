import React from 'react';

import './ContentGrid.css';
import ImageGrid from '../../components/ProductArea/ImageGrid/ImageGrid';
import NavigationItems from '../../components/ProductArea/NavigationItems/NavigationItems';
import ProductInfo from '../../components/ProductArea/ProductInfo/ProductInfo';

const ContentGrid = () => (
    <div className='content-grid'>
        <section className='product-area'>
            <ImageGrid />
            <NavigationItems />
            <ProductInfo />
        </section>
    </div>
);

export default ContentGrid;
