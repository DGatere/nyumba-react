import React from 'react';

import './Location.css';

const Location = () => (
    <div className='location'>
        <h4 className='location-title'>Location</h4>
        <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.862688379229!2d36.790328814762105!3d-1.2540506359455845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f177a732b4501%3A0x1e425696b7edb7b4!2sTotal%2FKabete%20Lane!5e0!3m2!1sen!2ske!4v1570098321234!5m2!1sen!2ske'
            className='location-map'
            title='google-maps'></iframe>
    </div>
);

export default Location;
