import { useState, useEffect } from 'react';
import CountriesService from "./Services/Service";
import CountryInfo from './Components/CountryInfo';
import './App.css';
import ContriesList from './Components/CountriesList';

function App() {
  const [inputCountry, setInputCountry] = useState("");
  const [allCountries, setAllCountries] = useState({});
  const [country, setCountry] = useState({});

  useEffect(() => {
    CountriesService
      .getAll()
      .then(values => {
        setAllCountries(values)
        //  console.log(values)
      })
  }, [])

  const handleFilterChange = (event) => {
    setInputCountry(event.target.value);
  }

  const searchCountry = () => {
    CountriesService
      .getCountry(inputCountry)
      .then(value => {
        setCountry(value);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      <div>
        Country to search:
        <input value={inputCountry} onChange={handleFilterChange} />
        <button onClick={searchCountry}>Buscar</button>
      </div>

      <ContriesList allCountries={allCountries} inputCountry={inputCountry}></ContriesList>

      <CountryInfo country={country}></CountryInfo>

    </>
  );
}

export default App;
