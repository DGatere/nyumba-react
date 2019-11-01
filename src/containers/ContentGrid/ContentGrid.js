import React from 'react';

import './ContentGrid.css';
import ImageGrid from '../../components/ProductArea/ImageGrid/ImageGrid';
import NavigationItems from '../../components/ProductArea/NavigationItems/NavigationItems';
import ProductInfo from '../../components/ProductArea/ProductInfo/ProductInfo';
import Recommendations from '../../components/ProductArea/SideArea/Recommendations/Recommendations';

const ContentGrid = () => (
    <div className='content-grid'>
        <section className='product-area'>
            <ImageGrid />
            <NavigationItems />
            <ProductInfo />
            <Recommendations />
        </section>
    </div>
);

export default ContentGrid;
