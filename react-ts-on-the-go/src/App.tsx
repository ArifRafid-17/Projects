import { Suspense } from 'react'
import './App.css'
import type { CountryType } from './types'
import Countries from './components/Countries/countries'
// Create a promise to load data

const countriesPromise = async (): Promise<CountryType[]> => {
  const response = await fetch('https://openapi.programming-hero.com/api/all')
  const data = await response.json()
  return data.countries;
}



function App() {

  return (
    <>
    <h2> World on the go</h2>
    <Suspense fallback={<h2>Loading...</h2>}>
     <Countries countriesPromise={countriesPromise()}></Countries>

    </Suspense>
  
    </>
  )
}

export default App
