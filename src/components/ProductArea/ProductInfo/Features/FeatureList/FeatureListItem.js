import React from 'react';

const FeatureListItem = props => (
    <li>
        <i className='check icon small red'></i>
        {props.feature}
    </li>
);

export default FeatureListItem;
