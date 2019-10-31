import React from 'react';

import './Toolbar.css';

const Toolbar = props => (
    <div>
        <button onClick={props.click} className='toggle-button'>
            <span className='toggle-button__bar'></span>
            <span className='toggle-button__bar'></span>
            <span className='toggle-button__bar'></span>
        </button>
    </div>
);

export default Toolbar;
