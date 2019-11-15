import React from 'react';

import partnerAvatar from '../../../../../assets/images/saj.png';
import './PartnerAvatar.css';

const PartnerAvatar = ({ avatar }) => (
    <div className='avatar'>
        <img src={partnerAvatar} alt='avatar' className='img-avatar_circle-small' />
    </div>
);

export default PartnerAvatar;
