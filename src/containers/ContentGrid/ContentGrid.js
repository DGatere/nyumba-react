import React from 'react';

import './ContentGrid.css';
import ImageGrid from '../../components/ProductArea/ImageGrid/ImageGrid';
import NavigationItems from '../../components/ProductArea/NavigationItems/NavigationItems';
import ProductInfo from '../../components/ProductArea/ProductInfo/ProductInfo';
import Profile from '../../components/ProductArea//SideArea/Profile/Profile';
import Recommendations from '../../components/ProductArea/SideArea/Recommendations/Recommendations';

const ContentGrid = () => (
    <div className='content-grid'>
        <section className='product-area'>
            <ImageGrid />
            <NavigationItems />
            <ProductInfo />
            <Profile />
            <Recommendations />
        </section>
    </div>
);

export default ContentGrid;
