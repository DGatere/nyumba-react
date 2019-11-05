import React from 'react';

import './Instructions.css';

const Instructions = () => {
    return (
        <section className='content__instruction'>
            <div className='instructions'>
                <h3>How it works</h3>
                <p>
                    <img
                        src={require('../../assets/images/check.svg')}
                        className='instruction__icon'
                        alt='check-icon'
                    />
                    Simply select a property to buy or rent
                </p>
                <p>
                    <img
                        src={require('../../assets/images/check.svg')}
                        className='instruction__icon'
                        alt='check-icon'
                    />
                    Nyumba will recommend for you the appropriate business partners to support you
                    and MAKE IT HAPPEN
                </p>
            </div>
        </section>
    );
};

export default Instructions;
