import './country.css'
import {useState} from 'react'
export interface CountryProps {
    country: {
        name: { common: string }
        flags: { flags: { png: string; alt: string } }
        capital: { capital: string }
        population: { population: number }
    }
    onVisited: (country: string) => void
}

export default function Country({ country, onVisited }: CountryProps) {
    
    const [isVisited, setIsVisited] = useState<boolean>(false)



    const handleVisited = () => {
        // setIsVisited(true)

        // isVisited ? setIsVisited(false) : setIsVisited(true)   //toggle korlam , if else o use korte partam

        setIsVisited(!isVisited)  //arekta easy way 
        onVisited(country.name.common);
    }
    return (
        <div className={`country ${isVisited ? 'country-visited' : ''}`}>
            <h3>{country.name.common}</h3>
            <img className="country-flag" src={country.flags.flags.png} alt={country.flags.flags.alt}></img>

            <p>Capital: {country.capital.capital}</p>
            <p>Population: {country.population.population}</p>
            <button onClick={handleVisited} >
                {isVisited ? 'Visited' : 'Mark as Visited'}
            </button>
        </div>
    )
}