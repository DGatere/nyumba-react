import React from 'react';

import Recommendations from '../../Recommendations/Recommendations';

const Interests = () => (
    <div className='profile'>
        <h4>Nyumba Partners</h4>
        <p className='avatar-text_grey'>You are likely to be interested in the following</p>
        <div className='partner-details'></div>
        <Recommendations />
    </div>
);

export default Interests;
