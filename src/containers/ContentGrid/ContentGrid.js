import React from 'react';

import './ContentGrid.css';
import ProductArea from '../../components/ProductArea/ProductArea';
import SideArea from '../../components/SideArea/SideArea';

const ContentGrid = () => (
    <div className='content-grid'>
        <ProductArea />
        <SideArea />
    </div>
);

export default ContentGrid;
