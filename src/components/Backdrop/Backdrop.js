import React from 'react';

import './Backdrop.css';

const Backdrop = props => <div className='backdrop' onClick={props.close}></div>;

export default Backdrop;
