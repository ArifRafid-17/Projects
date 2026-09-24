import type { CountryType } from "../../types"
import { use, useState } from "react"
import Country from "../Country/country"
import './countries.css'


export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>

}

export default function Countries({ countriesPromise }: CountriesProps) {

    const [visitedcountries, setVisitedcountries] = useState<CountryType[]>([])

    const countries = use(countriesPromise)


    const handleVisitedCountry = (country: CountryType): void => {

        const exists = visitedcountries.find(c => c.ccn3.ccn3 === country.ccn3.ccn3);
        
        if(exists) {
            const remainingCountries = visitedcountries.filter(c => c !== country);
            setVisitedcountries(remainingCountries);
            return;
        }
        else{
             setVisitedcountries([...visitedcountries, country]);
        }
    }
     
    return (
        <>
            <div>
                <h2>Countries: {countries.length}</h2>
                <h2>Visited Countries: {visitedcountries.length}</h2>
                <div>
                    <ul>
                        {
                            visitedcountries.map(country => <li>{country.name.common}</li>)
                        }
                    </ul>
                </div>
                <div className="countries">
                    {
                            countries.map(country => (
                                <Country
                                    key={country.ccn3.ccn3}
                                    country={country as unknown as React.ComponentProps<typeof Country>["country"]}
                                    onVisited={() => handleVisitedCountry(country)}
                                />
                            ))
                    }
                </div>
            </div>
        </>
    )
}