import React from 'react';
import uuid from 'uuid/v4';

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
            <Partners key={uuid()} partner={partner} />
        ))}
    </div>
);

export default Recommendations;
