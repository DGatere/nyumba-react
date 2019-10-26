import React from 'react';

import './Instructions.css';

const Instructions = () => {
    return (
        <section className='content__instruction'>
            <div className='instructions'>
                <h3>How it works</h3>
                <p>
                    <i className='check circle icon red'></i>Simply select a property to buy or rent
                </p>
                <p>
                    <i className='check circle icon red'></i>Nyumba will recommend for you the
                    appropriate business partners to support you and MAKE IT HAPPEN
                </p>
            </div>
        </section>
    );
};

export default Instructions;
