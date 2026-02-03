
'use client';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

/**
 *  If you're fetching data, use React Query.
 *  If you're not fetching data, stick with useEffect.
 */

function Holidays() {

    const [country, setCountry] = useState('NL'); // automatically set to NL

    console.log(country);

    /* query gerir basically þetta, 
    useEffect(() => {
    fetch(url)
        .then(res => res.json())
        .then(setData)
        .catch(setError)
        .finally(() => setLoading(false));
    }, [url]);

    */

    const {data: countries, isLoading: loadingCountries, error: countriesError} = useQuery({
        queryKey: ['countries'],
        queryFn: () => fetch('https://openholidaysapi.org/Countries?languageIsoCode=en').then(res => res.json())
    });


    const {data: holidays, isLoading: loadingHolidays, error: holidaysError} = useQuery({
        queryKey: ['holidays', country],
        queryFn: () => fetch(`https://openholidaysapi.org/PublicHolidays?countryIsoCode=${country}&validFrom=2023-01-01&validTo=2023-12-31&languageIsoCode=en`).then(res => res.json()),
    });

    console.log(holidays);


    
    return (
        <div className="App">

            <h1> List of public holidays</h1>
            <p>Public holiday calander of 2025 using OpenHolidaysAPI and React Query</p>

            {loadingCountries && <p>Loading countries...</p>}
            {countriesError && <p>Oops! Couldn’t load countries.</p>}

            {countries && (
            <select value={country} onChange={e => setCountry(e.target.value)}>
            {countries.map((c, i) => (
                <option key={i} value={c.isoCode}>
                {c.name[0].text}
                </option>
            ))}
            </select>
        )}

        {loadingHolidays && <p>Loading holidays...</p>}
        {holidaysError && <p>Oops! Couldn’t load holidays.</p>
        }
        {holidays && (
            <ul>
            {holidays.map((h, i) => (
                <li key={i}>
                {
                    new Date(h.startDate).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'short',
                    }) 
                } - {h.name[0].text}
                
                </li>
            ))}
            </ul>
        )}

        
        
        
        </div>
    );
}

export default Holidays;