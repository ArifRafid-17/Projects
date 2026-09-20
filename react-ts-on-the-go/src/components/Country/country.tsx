import './country.css'
import {useState} from 'react'
export interface CountryProps {
    country: string
}

export default function Country({ country }: CountryProps) {
    
    const [isVisited, setIsVisited] = useState<boolean>(false)



    const handleVisited = () => {
        // setIsVisited(true)

        // isVisited ? setIsVisited(false) : setIsVisited(true)   //toggle korlam , if else o use korte partam

        setIsVisited(!isVisited)  //arekta easy way 
    }
    return (
        <div className={`country ${isVisited ? 'country-visited' : ''}`}>
            <h3>{country.name.common}</h3>
            <img className="country-flag" src={country.flags.flags.png} alt={country.flags.flags.alt}></img>

            <p>Capital: {country.capital.capital}</p>
            <p>Population: {country.population.population}</p>
            <button onClick={handleVisited}>
                {isVisited ? 'Visited' : 'Mark as Visited'}
            </button>
        </div>
    )
}