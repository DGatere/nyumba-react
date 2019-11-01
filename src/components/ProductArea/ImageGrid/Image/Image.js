import React from 'react';

import './Image.css';

const Image = props => (
    <img
        src={require('../../../../assets/images/office.jpg')}
        alt='apartment'
        className={props.classes}
    />
);

export default Image;
