import React from 'react';

import './Recommendations.css';
import Search from './Search/Search';
import Partners from './Partners/Partners';

const partners = [
    {
        name: 'SAJ CERAMICS',
        services: ['Floor Tiles', 'Tiles', 'Concrete Products', 'Building Materials']
    },
    {
        name: 'TINTORIA',
        services: ['Drycleaners']
    },
    {
        name: 'SAJ CERAMICS',
        services: ['Floor Tiles', 'Tiles', 'Concrete Products', 'Building Materials']
    },
    {
        name: 'TINTORIA',
        services: ['Drycleaners']
    },
    {
        name: 'SAJ CERAMICS',
        services: ['Floor Tiles', 'Tiles', 'Concrete Products', 'Building Materials']
    },
    {
        name: 'TINTORIA',
        services: ['Drycleaners']
    }
];

const Recommendations = () => (
    <aside className='profile'>
        <p className='avatar-text_grey'>You are likely to be interested in the following</p>
        <h4 className='partner__header_red'>Nyumba Partners</h4>
        <div>
            <Search />
            {partners.map(partner => (
                <Partners key={Math.random()} partner={partner} />
            ))}
        </div>
    </aside>
);

export default Recommendations;
