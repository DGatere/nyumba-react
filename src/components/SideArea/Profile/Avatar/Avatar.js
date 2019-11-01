import React from 'react';

import './Avatar.css';

const Avatar = () => (
    <div className='avatar'>
        <img
            src={require('../../../../assets/images/gemma.jpg')}
            alt='avatar'
            className='img-avatar_circle'
        />
        <div className='online'></div>
    </div>
);

export default Avatar;
