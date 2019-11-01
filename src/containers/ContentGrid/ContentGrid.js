import React from 'react';

import './ContentGrid.css';
import ImageGrid from '../../components/ProductArea/ImageGrid/ImageGrid';
import NavigationItems from '../../components/ProductArea/NavigationItems/NavigationItems';

const ContentGrid = () => (
    <div className='content-grid'>
        <section className='product-area'>
            <ImageGrid />
            <NavigationItems />
        </section>
    </div>
);

export default ContentGrid;
