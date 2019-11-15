import React from 'react';

import userAvatar from '../../../../assets/images/gemma.jpg';
import './Avatar.css';

const Avatar = () => (
    <div className='avatar'>
        <img src={userAvatar} alt='avatar' className='img-avatar_circle' />
        <div className='online'></div>
    </div>
);

export default Avatar;
