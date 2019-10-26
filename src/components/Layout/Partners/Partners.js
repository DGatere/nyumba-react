import React from 'react';

import './Partners.css';

const Partners = () => {
    return (
        <section>
            <div>
                <h3 className='partner-text'>Partners</h3>
                <div className='partner__links'>
                    <img
                        className='partner__img partner__img_height'
                        src={require('../../../assets/images/findit.jpg')}
                        alt='findit'
                    />
                    <img
                        className='partner__img'
                        src={require('../../../assets/images/sokompare.png')}
                        alt='sokompare'
                    />
                    <img
                        className='partner__img'
                        src={require('../../../assets/images/vaal.png')}
                        alt='vaal'
                    />
                </div>
            </div>
        </section>
    );
};

export default Partners;
