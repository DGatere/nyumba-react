import React, { useState } from 'react';

import './FilterPropertyForm.css';

const FilterPropertyForm = () => {
    const [formFields, setFormFields] = useState({
        status: 'Any Status',
        type: 'Any Status',
        bedrooms: 'Any Status',
        bathrooms: 'Any Status',
        location: 'Any Status'
    });

    const handleChange = event => {
        setFormFields({ ...formFields, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        const value = JSON.stringify(formFields);
        alert(`Submitted ${value}`);
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
            <select
                name='status'
                value={formFields.status}
                className='form__select_theme_golden_white'
                onChange={handleChange}>
                <option value='Any Status' className='form__option_pad'>
                    Any Status
                </option>
                <option value='For Rent' className='form__option_pad'>
                    For Rent
                </option>
                <option value='For Sale' className='form__option_pad'>
                    For Sale
                </option>
            </select>
            <select
                name='type'
                value={formFields.type}
                className='form__select_theme_golden_white'
                onChange={handleChange}>
                <option value='All Type' className='form__option_pad'>
                    All Type
                </option>
                <option value='For Rent' className='form__option_pad'>
                    For Rent
                </option>
                <option value='For Sale' className='form__option_pad'>
                    For Sale
                </option>
            </select>
            <select
                name='bedrooms'
                value={formFields.bedrooms}
                className='form__select_theme_golden_white'
                onChange={handleChange}>
                <option value='Bedrooms' className='form__option_pad'>
                    Bedrooms
                </option>
                <option value='For Rent' className='form__option_pad'>
                    For Rent
                </option>
                <option value='For Sale' className='form__option_pad'>
                    For Sale
                </option>
            </select>
            <select
                name='bathrooms'
                value={formFields.bathrooms}
                className='form__select_theme_golden_white'
                onChange={handleChange}>
                <option value='Bathrooms' className='form__option_pad'>
                    Bathrooms
                </option>
                <option value='For Rent' className='form__option_pad'>
                    For Rent
                </option>
                <option value='For Sale' className='form__option_pad'>
                    For Sale
                </option>
            </select>
            <select
                name='location'
                value={formFields.location}
                className='form__select_theme_golden_white'
                onChange={handleChange}>
                <option value='Any Location' className='form__option_pad'>
                    Any Location
                </option>
                <option value='For Rent' className='form__option_pad'>
                    For Rent
                </option>
                <option value='For Sale' className='form__option_pad'>
                    For Sale
                </option>
            </select>
            <button
                type='submit'
                value='Submit'
                className='form__select_theme_golden_white form__button_theme_inverse'>
                <svg width='13px' height='14px' viewBox='0 0 17 18' className='search__icon'>
                    <g id='Icons' stroke='none' fill='none'>
                        <g id='Rounded' transform='translate(-545.000000, -421.000000)'>
                            <g id='Action' transform='translate(100.000000, 100.000000)'>
                                <g
                                    id='-Round-/-Action-/-search'
                                    transform='translate(442.000000, 318.000000)'>
                                    <g>
                                        <polygon id='Path' points='0 0 24 0 24 24 0 24'></polygon>
                                        <path
                                            d='M15.5,14 L14.71,14 L14.43,13.73 C15.63,12.33 16.25,10.42 15.91,8.39 C15.44,5.61 13.12,3.39 10.32,3.05 C6.09,2.53 2.53,6.09 3.05,10.32 C3.39,13.12 5.61,15.44 8.39,15.91 C10.42,16.25 12.33,15.63 13.73,14.43 L14,14.71 L14,15.5 L18.25,19.75 C18.66,20.16 19.33,20.16 19.74,19.75 C20.15,19.34 20.15,18.67 19.74,18.26 L15.5,14 Z M9.5,14 C7.01,14 5,11.99 5,9.5 C5,7.01 7.01,5 9.5,5 C11.99,5 14,7.01 14,9.5 C14,11.99 11.99,14 9.5,14 Z'
                                            id='Icon-Color'
                                            fill='#daa520'></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                Find
            </button>
        </form>
    );
};

export default FilterPropertyForm;
