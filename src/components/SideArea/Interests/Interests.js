import React from 'react';

import './Interests.css';
import Recommendations from '../../Recommendations/Recommendations';

const Interests = () => (
    <aside className='profile'>
        <p className='avatar-text_grey'>You are likely to be interested in the following</p>
        <h4 className='partner__header_red'>Nyumba Partners</h4>
        <Recommendations />
    </aside>
);

export default Interests;
