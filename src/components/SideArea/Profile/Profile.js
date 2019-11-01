import React from 'react';

import './Profile.css';
import Avatar from './Avatar/Avatar';

const Profile = () => (
    <aside className='profile'>
        <h4 className='profile__header_red'>To Rent, Call Agent</h4>
        <div className='profile-details'>
            <Avatar />
            <div>
                <p className='avatar-text avatar-text_bold'>VIRAL SHAH</p>
                <p className='avatar-text avatar-text_grey'>findit.com</p>
                <div className='social'>
                    <i className='envelope icon'></i>
                    <i className='phone square icon'></i>
                    <i className='twitter icon'></i>
                    <i className='facebook f icon'></i>
                    <i className='instagram icon'></i>
                </div>
            </div>
        </div>
    </aside>
);

export default Profile;
