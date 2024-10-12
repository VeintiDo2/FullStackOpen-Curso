import { useState, useEffect } from 'react';
import CountriesService from "./Services/Service";
import CountryInfo from './Components/CountryInfo';
import './App.css';
import ContriesList from './Components/CountriesList';
import Filter from './Components/Filter';
import Weather from "./Components/Weather";

function App() {
  const [inputCountry, setInputCountry] = useState("");
  const [allCountries, setAllCountries] = useState({});
  const [country, setCountry] = useState({});
  const [weather, setWeather] = useState({});

  useEffect(() => {
    CountriesService
      .getAll()
      .then(values => {
        setAllCountries(values)
      })
  }, [])

  const handleFilterChange = (event) => {
    setInputCountry(event.target.value);
  }

  return (
    <>
      <Filter allCountries={allCountries} inputCountry={inputCountry} handleFilterChange={handleFilterChange}></Filter>

      <ContriesList allCountries={allCountries} inputCountry={inputCountry} setCountry={setCountry} setWeather={setWeather}></ContriesList>

      <CountryInfo country={country}></CountryInfo>

      <Weather weather={weather} ></Weather>
    </>
  );
}

export default App;
