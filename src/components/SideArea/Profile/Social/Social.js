import React from 'react';

import './Social.css';

const Social = () => (
    <div>
        <img
            className='social__icon'
            src={require('../../../../assets/images/email.svg')}
            alt='email'
        />
        <img
            className='social__icon'
            src={require('../../../../assets/images/call-button.svg')}
            alt='call'
        />
        <img
            className='social__icon'
            src={require('../../../../assets/images/twitter.svg')}
            alt='twitter'
        />
        <img
            className='social__icon'
            src={require('../../../../assets/images/facebook.svg')}
            alt='facebook'
        />
        <img
            className='social__icon'
            src={require('../../../../assets/images/instagram.svg')}
            alt='instagram'
        />
    </div>
);

export default Social;
