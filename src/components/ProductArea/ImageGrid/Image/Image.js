import React from 'react';

import office from '../../../../assets/images/office.jpg';
import './Image.css';

const Image = props => <img src={office} alt='apartment' className={props.classes} />;

export default Image;
