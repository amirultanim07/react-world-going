import React, { useState } from 'react';
import './country.css'

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        // if (visited===true) {
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true);
        // }

        setVisited(!visited);
        handleVisitedCountries(country);
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.png} alt="" />
            <h3>Name : {country.name.common}</h3>
            <p>Independent : {country.independent ? 'Free' : 'Not Free'}</p>
            <p>Population : {country.population}</p>
            <button onClick={handleVisited}>{visited ? 'visited' : 'Not Visited'}</button>
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Visited Flags</button>
        </div>
    );
};

export default Country;