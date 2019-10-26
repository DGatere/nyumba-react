import React, { Component } from 'react';

import './FilterPropertyForm.css';

class FilterPropertyForm extends Component {
    state = {
        status: '',
        type: '',
        bedrooms: '',
        bathrooms: '',
        location: ''
    };

    handleChange = event => {
        console.log('event.target.name', event.target.name);
        console.log('event.target.value', event.target.value);
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const value = JSON.stringify(this.state);
        alert(`Submitted ${value}`);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='form'>
                <select
                    name='status'
                    value={this.state.value}
                    className='form__select_theme_golden_white'
                    onChange={this.handleChange}>
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
                    value={this.state.value}
                    className='form__select_theme_golden_white'
                    onChange={this.handleChange}>
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
                    value={this.state.value}
                    className='form__select_theme_golden_white'
                    onChange={this.handleChange}>
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
                    value={this.state.value}
                    className='form__select_theme_golden_white'
                    onChange={this.handleChange}>
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
                    value={this.state.value}
                    className='form__select_theme_golden_white'
                    onChange={this.handleChange}>
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
                    <i className='search icon'></i>Find
                </button>
            </form>
        );
    }
}

export default FilterPropertyForm;
