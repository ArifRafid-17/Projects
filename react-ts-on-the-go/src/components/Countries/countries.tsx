import type { CountryType } from "../../types"
import { use } from "react"
import Country from "../Country/country"
import './countries.css'


export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>

}

export default function Countries({ countriesPromise }: CountriesProps) {
    const countries = use(countriesPromise)
    return (
        <>
            <div>
                <h2>Countries: {countries.length}</h2>
                <div className="countries">
                    {
                        countries.map(country => <Country key={country.ccn3.ccn3} country = {country}></Country>)
                    }
                </div>
            </div>
        </>
    )
}