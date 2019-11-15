import React from 'react';

import findIt from '../../assets/images/findit.jpg';
import sokoKompare from '../../assets/images/sokompare.png';
import vaal from '../../assets/images/vaal.png';
import './Partners.css';

const Partners = () => {
    return (
        <section>
            <div>
                <h3 className='partner-text'>Partners</h3>
                <div className='partner__links'>
                    <img className='partner__img partner__img_height' src={findIt} alt='findit' />
                    <img className='partner__img' src={sokoKompare} alt='sokompare' />
                    <img className='partner__img' src={vaal} alt='vaal' />
                </div>
            </div>
        </section>
    );
};

export default Partners;
