import React from 'react';

import Search from '../Search/Search';
import Partners from '../SideArea/Interests/Partners/Partners';

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
    <div>
        <Search />
        {partners.map(partner => (
            <Partners key={Math.random()} partner={partner} />
        ))}
    </div>
);

export default Recommendations;
