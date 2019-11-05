import React from 'react';

import './Profile.css';
import Avatar from './Avatar/Avatar';
import Social from './Social/Social';

const Profile = () => (
    <aside className='profile'>
        <h4 className='profile__header_red'>To Rent, Call Agent</h4>
        <div className='profile-details'>
            <Avatar />
            <div>
                <p className='avatar-text avatar-text_bold'>VIRAL SHAH</p>
                <p className='avatar-text avatar-text_grey'>findit.com</p>
                <Social />
            </div>
        </div>
    </aside>
);

export default Profile;
