import React from 'react';

import './FeatureListItems.css';
import FeatureListItem from './FeatureListItem';

const FeatureListItems = props => (
    <ul className='product-amenities__items'>
        {props.items.map(item => (
            <FeatureListItem key={Math.random()} feature={item} />
        ))}
    </ul>
);

export default FeatureListItems;
