import React, { use, useState } from 'react';
import Country from '../country/Country';
import './countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const countries = use(countriesPromise);

    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    return (
        <div>
            <h1>Traveling Countries: {countries.length}</h1>
            <h3>Traveled So Far : {visitedCountries.length}</h3>
            <div className='Visited-flags-container'>
                {
                    visitedFlags.map(flag => <img src={flag}></img>)
                }
            </div>
            <ol>
                {
                    visitedCountries.map(country => <li>{country.name.common}</li>)
                }
            </ol>

            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlags={handleVisitedFlags}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;