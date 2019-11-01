import React from 'react';

import './Search.css';

const Search = () => (
    <div>
        <div className='search-container'>
            <input type='text' placeholder='Search for any property' className='search-field' />
            <input type='button' value='Search' className='search__button' />
        </div>
    </div>
);

export default Search;
