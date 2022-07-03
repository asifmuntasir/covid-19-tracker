import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../assets/CountryList.css';

const CountryList = (props) => {

    const handleClick = props.handleClick;

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/countries')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <>
            <div className="country-list box-shadow">
                <ul className='list-group'>
                    {
                        countries.map(country => (<li className='list-group-item list-group-item-action cursor-pointer' key={country.country} onClick={() => handleClick(country.country)}>{country.country}</li>))
                    }
                </ul>
            </div>
        </>
    );
};

export default CountryList;