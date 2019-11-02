import React from 'react';

import './PartnerAvatar.css';

const PartnerAvatar = ({ avatar }) => (
    <div className='avatar'>
        <img
            src={require('../../../../assets/images/saj.png')}
            alt='avatar'
            className='img-avatar_circle-small'
        />
    </div>
);

export default PartnerAvatar;
