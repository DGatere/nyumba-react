import React from 'react';

import './FeatureListItem.css';

const FeatureListItem = props => (
    <li>
        <img
            src={require('../../../../../assets/images/tick.svg')}
            alt='tick-icon'
            className='check_small'
        />
        {props.feature}
    </li>
);

export default FeatureListItem;
