import React from 'react';

import email from '../../../../assets/images/email.svg';
import callButton from '../../../../assets/images/call-button.svg';
import twitter from '../../../../assets/images/twitter.svg';
import facebook from '../../../../assets/images/facebook.svg';
import instagram from '../../../../assets/images/instagram.svg';
import './Social.css';

const Social = () => (
    <div>
        <img className='social__icon' src={email} alt='email' />
        <img className='social__icon' src={callButton} alt='call' />
        <img className='social__icon' src={twitter} alt='twitter' />
        <img className='social__icon' src={facebook} alt='facebook' />
        <img className='social__icon' src={instagram} alt='instagram' />
    </div>
);

export default Social;
